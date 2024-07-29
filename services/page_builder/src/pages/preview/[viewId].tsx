import MobileFirstLayout from "@/src/components/view/MobileFirstLayout";
import { useViewSchemaSlices } from "@/src/hooks/useViewSchemaSlices";
import { previewStorage } from "@/src/utils/initLocalStorage";
import { ViewSliceSchemaSnippet } from "@/src/utils/viewSlicesSchemaSnippet";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PreviewPage = () => {
  const router = useRouter();
  const { viewId } = router.query;
  const [viewSchema, setViewSchema] = useState(ViewSliceSchemaSnippet.init);

  useEffect(() => {
    if (!viewId) return;

    const stringfiedVIewSchema = previewStorage.get(viewId as string);

    if (stringfiedVIewSchema) {
      setViewSchema(JSON.parse(stringfiedVIewSchema));
    }
  }, [viewId]);

  const slices = useViewSchemaSlices(viewSchema);

  return <MobileFirstLayout>{slices}</MobileFirstLayout>;
};

export default PreviewPage;

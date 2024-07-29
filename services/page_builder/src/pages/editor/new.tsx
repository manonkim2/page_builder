import JsonPresetList from "@/src/components/Editor";
import JsonEditor from "@/src/components/Editor/Json";
import DesktopFirstLayout from "@/src/components/view/DesktopFirstLayout";
import DesktopBody from "@/src/components/view/DesktopFirstLayout/Body";
import DesktopNav from "@/src/components/view/DesktopFirstLayout/Nav";
import SideNav from "@/src/components/view/DesktopFirstLayout/SideNav";
import { useViewSchemaValidation } from "@/src/hooks/useViewSchemaValidation";
import { formatObjectToJson } from "@/src/utils/formatObjectToJson";
import { previewStorage } from "@/src/utils/initLocalStorage";
import { ViewSliceSchemaSnippet } from "@/src/utils/viewSlicesSchemaSnippet";

import { Button } from "@manon/react-components-button";
import { useToast } from "@manon/react-components-toast";
import { useState } from "react";
import ShortUniqueId from "short-unique-id";

const EditorNewPage: React.FC = () => {
  const { randomUUID } = new ShortUniqueId({ length: 10 });
  const viewId = randomUUID();
  const { toast } = useToast();

  const [schema, setSchema] = useState(
    formatObjectToJson(ViewSliceSchemaSnippet.init),
  );

  const { validateViewSchema, handleEditorValidation } =
    useViewSchemaValidation();

  const handleReset = () => {
    setSchema(formatObjectToJson(ViewSliceSchemaSnippet.init));
  };

  const handlePreview = () => {
    validateViewSchema({
      viewSchema: schema,
      onSuccess: () => {
        previewStorage.set(viewId, schema);

        window.open(`/preview/${viewId}`, "_blank");
      },
      onError: ({ message }) => {
        toast({
          payload: { message },
        });
      },
    });
  };

  return (
    <DesktopFirstLayout>
      <DesktopNav gap={8}>
        <Button variant="outline" size="md" color="red" onClick={handleReset}>
          초기화
        </Button>
        <Button
          variant="outline"
          size="md"
          color="gray"
          onClick={handlePreview}
        >
          미리보기
        </Button>
        <Button size="md" color="green">
          배포하기
        </Button>
      </DesktopNav>
      <DesktopBody>
        <SideNav>
          <JsonPresetList
            validateViewSchema={validateViewSchema}
            schema={schema}
            setSchema={setSchema}
          />
        </SideNav>
        <JsonEditor
          value={schema}
          onChange={(value) => setSchema(value || "")}
          onValidate={handleEditorValidation}
        />
      </DesktopBody>
    </DesktopFirstLayout>
  );
};

export default EditorNewPage;

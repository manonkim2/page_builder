import JsonEditor from "@/src/components/Editor/Json";
import DesktopFirstLayout from "@/src/components/view/DesktopFirstLayout";
import DesktopBody from "@/src/components/view/DesktopFirstLayout/Body";
import DesktopNav from "@/src/components/view/DesktopFirstLayout/Nav";
import { formatObjectToJson } from "@/src/utils/formatObjectToJson";
import { ViewSliceSchemaSnippet } from "@/src/utils/ViewSlicesSchemaSnippet";
import { Button } from "@manon/react-components-button";
import { useState } from "react";

const EditorNewPage: React.FC = () => {
  const [schema, setSchema] = useState(
    formatObjectToJson(ViewSliceSchemaSnippet.init),
  );

  const handleReset = () => {
    setSchema(formatObjectToJson(ViewSliceSchemaSnippet.init));
  };

  return (
    <DesktopFirstLayout>
      <DesktopNav gap={8}>
        <Button variant="outline" size="md" color="red" onClick={handleReset}>
          초기화
        </Button>
        <Button variant="outline" size="md" color="gray">
          미리보기
        </Button>
        <Button size="md" color="green">
          배포하기
        </Button>
      </DesktopNav>
      <DesktopBody>
        <JsonEditor
          value={schema}
          onChange={(value) => setSchema(value || "")}
        />
      </DesktopBody>
    </DesktopFirstLayout>
  );
};

export default EditorNewPage;

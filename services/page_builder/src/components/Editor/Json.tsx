import { Editor, EditorProps } from "@monaco-editor/react";
import { fontSize } from "../../../../../packages/themes/dist/variables/typography";

type IJsonEditorProps = EditorProps;

const JsonEditor = (props: IJsonEditorProps) => {
  const { defaultLanguage = "json", height = "90vh", options, ...rest } = props;
  return (
    <Editor
      {...rest}
      height={height}
      defaultLanguage={defaultLanguage}
      options={{ fontSize: 16, formatOnPaste: true, ...options }}
    />
  );
};

export default JsonEditor;

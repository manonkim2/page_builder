import { Fragment } from "react";
import { useToast } from "@manon/react-components-toast";
import { Button } from "@manon/react-components-button";
import { Divider } from "@manon/react-components-layout";

import { ValidateViewSchemaProps } from "@/src/hooks/useViewSchemaValidation";
import { formatObjectToJson } from "@/src/utils/formatObjectToJson";
import { ViewSliceSchemaSnippet } from "@/src/utils/viewSlicesSchemaSnippet";

type IJsonPresetListProps = {
  schema: string;
  setSchema: (schema: string) => void;
  validateViewSchema: (props: ValidateViewSchemaProps) => void;
};

type Preset = {
  name: string;
  snippet: object;
};

const JsonPresetList = ({
  schema,
  setSchema,
  validateViewSchema,
}: IJsonPresetListProps) => {
  const toast = useToast();

  const presets: Preset[] = [
    {
      name: "TextSlice",
      snippet: ViewSliceSchemaSnippet.textSlice,
    },
    {
      name: "ImageSlice",
      snippet: ViewSliceSchemaSnippet.imageSlice,
    },
    {
      name: "ImageSliderSectionSlice",
      snippet: ViewSliceSchemaSnippet.imageSliderSectionSlice,
    },
    {
      name: "SpacingSlice",
      snippet: ViewSliceSchemaSnippet.spacingSlice,
    },
    {
      name: "accordionSlice",
      snippet: ViewSliceSchemaSnippet.accordionSlice,
    },
  ];

  return (
    <>
      {presets.map(({ name, snippet }) => {
        const handleClick = () => {
          validateViewSchema({
            viewSchema: schema,
            onSuccess: () => {
              const objectifiedSchema = JSON.parse(schema);
              objectifiedSchema.slices.push(snippet);

              setSchema(formatObjectToJson(objectifiedSchema));
            },
            onError: ({ message }) => {
              toast({ payload: { message } });
            },
          });
        };
        return (
          <Fragment key={name}>
            <Button
              style={{ borderRadius: "0", width: "100%", color: "gray" }}
              variant="ghost"
              onClick={handleClick}
            >
              {name}
            </Button>
            <Divider />
          </Fragment>
        );
      })}
    </>
  );
};

export default JsonPresetList;

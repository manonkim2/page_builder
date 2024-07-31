import { SpacingSliceSchema } from "@/src/utils/validation/schema/slices";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { Box } from "@manon/react-components-layout";
import { vars } from "@manon/themes";

type SpacingSliceProps = SliceSchemaProps<typeof SpacingSliceSchema>;

const SpacingSlice = ({ sliceStyle }: SpacingSliceProps) => {
  const {
    height = 16,
    backgroundColor = vars.colors.$static.light.color.white,
  } = sliceStyle ?? {};

  return <Box style={{ width: "100%", height, backgroundColor }}></Box>;
};

export default SpacingSlice;

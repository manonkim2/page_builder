import { Box } from "@manon/react-components-layout";
import { vars } from "@manon/themes";

interface ISpacingSliceProps {
  sliceStyle?: {
    height?: number;
    backgroundColor?: string;
  };
}

const SpacingSlice = ({ sliceStyle }: ISpacingSliceProps) => {
  const {
    height = 16,
    backgroundColor = vars.colors.$static.light.color.white,
  } = sliceStyle ?? {};

  return <Box style={{ width: "100%", height, backgroundColor }}></Box>;
};

export default SpacingSlice;

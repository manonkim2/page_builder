import { CDN_BASE_URL } from "@/src/constants";
import { Box } from "@manon/react-components-layout";
import { vars } from "@manon/themes";

type IImageSliceProps = {
  imageUrl: string;
  alt: string;
  sliceStyle?: {
    width?: number;
    padding?: keyof typeof vars.box.spacing;
    paddingX?: keyof typeof vars.box.spacing;
    paddingY?: keyof typeof vars.box.spacing;
    backgroundColor?: string;
  };
};

const ImageSlice = ({ imageUrl, alt, sliceStyle }: IImageSliceProps) => {
  const {
    width = "100%",
    padding = 0,
    paddingX = 0,
    paddingY = 0,
    backgroundColor = "transparent",
  } = sliceStyle ?? {};

  return (
    <Box
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      style={{
        width: "100%",
        backgroundColor,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={`${CDN_BASE_URL}/${imageUrl}`} alt={alt} width={width} />
    </Box>
  );
};

export default ImageSlice;

import { CDN_BASE_URL } from "@/src/constants";
import { ImageSliceSchema } from "@/src/utils/validation/schema/slices";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { Box } from "@manon/react-components-layout";

type ImageSliceProps = SliceSchemaProps<typeof ImageSliceSchema>;

const ImageSlice = ({ imageUrl, alt, sliceStyle }: ImageSliceProps) => {
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
      <img src={imageUrl} alt={alt} width={width} />
    </Box>
  );
};

export default ImageSlice;

import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { ImageSliderSectionSliceSchema } from "@/src/utils/validation/schema/slices";
import { vars } from "@manon/themes";
import TextSlice from "../Text";
import ImageSlider from "../ImageSlider";

type Props = SliceSchemaProps<typeof ImageSliderSectionSliceSchema>;

export const ImageSliderSectionSlice: React.FC<Props> = ({
  text,
  images,
  sliceStyle,
}: Props) => {
  const {
    paddingX = 8,
    textColor = vars.colors.$static.light.color.black,
    backgroundColor = vars.colors.$static.light.color.white,
    imageItemWidth = 280,
  } = sliceStyle ?? {};

  return (
    <>
      <TextSlice
        text={text}
        sliceStyle={{
          textSize: 20,
          textColor,
          backgroundColor,
          textAlign: "left",
          paddingX,
          textWeight: 700,
        }}
      />
      <ImageSlider
        images={images}
        sliceStyle={{
          paddingX,
          imageItemWidth,
          backgroundColor,
        }}
      />
    </>
  );
};

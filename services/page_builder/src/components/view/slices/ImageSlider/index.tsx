import React from "react";

import { vars } from "@manon/themes";
import { Box } from "@manon/react-components-layout";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { convertSpacingRemToPx } from "@/src/utils/size";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { ImageSliderSliceSchema } from "@/src/utils/validation/schema/slices";

type ImageSliderProps = SliceSchemaProps<typeof ImageSliderSliceSchema>;

const ImageSlider = ({ images, sliceStyle }: ImageSliderProps) => {
  const {
    backgroundColor = "transparent",
    imageItemWidth = 240,
    spaceBetween = 16,
    paddingX = 8,
  } = sliceStyle ?? {};

  const offset = convertSpacingRemToPx(paddingX);

  return (
    <Box style={{ backgroundColor }}>
      <Swiper
        slidesPerView={"auto"}
        slidesOffsetBefore={offset}
        spaceBetween={spaceBetween}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {images.map(({ imageUrl, alt }, index) => (
          <SwiperSlide
            key={`${imageUrl}-${index}`}
            style={{ width: imageItemWidth }}
          >
            <img src={imageUrl} alt={alt} style={{ width: imageItemWidth }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageSlider;

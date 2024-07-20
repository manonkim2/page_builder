import React from "react";

import { vars } from "@manon/themes";
import { Box } from "@manon/react-components-layout";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { convertSpacingRemToPx } from "@/src/utils/size";

type Image = {
  imageUrl: string;
  alt: string;
};

interface IImageSliderProps {
  images: Image[];
  slicestyle?: {
    backgroundColor: string;
    imageItemWidth?: number;
    spaceBetween?: number;
    paddingX?: keyof typeof vars.box.spacing;
  };
}

const ImageSlider = ({ images, slicestyle }: IImageSliderProps) => {
  const {
    backgroundColor = "transparent",
    imageItemWidth = 240,
    spaceBetween = 16,
    paddingX = 8,
  } = slicestyle ?? {};

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

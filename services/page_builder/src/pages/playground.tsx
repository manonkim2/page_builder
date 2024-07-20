import { useMemo } from "react";

import MobileFirstLayout from "../components/view/MobileFirstLayout";
import TextSlice from "../components/view/slices/Text";
import ImageSlice from "../components/view/slices/Image";
import SpacingSlice from "../components/view/slices/Spacing";
import ImageSlider from "../components/view/slices/ImageSlider";

import { STATIC_LIGHT } from "../styles/constants";
import { CDN_BASE_URL } from "../constants";

const PlaygroundPage = () => {
  const imageUrl = useMemo(() => {
    const result = [];
    for (let num = 1; num <= 7; num++) {
      result.push({
        imageUrl: `${CDN_BASE_URL}/edu_${num}.webp`,
        alt: `강의 라인업 ${num} 프로그래밍: 강의 ${num}`,
      });
    }
    return result;
  }, []);

  return (
    <MobileFirstLayout>
      <TextSlice
        text="본 이벤트는 종료되었습니다."
        sliceStyle={{
          textColor: STATIC_LIGHT.color.white,
          backgroundColor: STATIC_LIGHT.color.black,
          textSize: 16,
          textWeight: 700,
        }}
      />
      <ImageSlice
        imageUrl={"main_sample.webp"}
        alt="온라인 강의 단돈 100원"
        sliceStyle={{
          padding: 0,
          backgroundColor: "#FFD951",
        }}
      />
      <SpacingSlice
        sliceStyle={{ backgroundColor: STATIC_LIGHT.color.black, height: 100 }}
      />
      <ImageSlice
        imageUrl="coin.webp"
        alt="coin"
        sliceStyle={{ width: 150, backgroundColor: STATIC_LIGHT.color.black }}
      />
      <TextSlice
        text={`공부 시작하려고 결심한 강의\n100원만 더 내고 이 모든 혜택 가져가세요!`}
        highlightTexts={["100원"]}
        sliceStyle={{
          backgroundColor: STATIC_LIGHT.color.black,
          textColor: STATIC_LIGHT.color.white,
          highlightColor: "#ffd64d",
        }}
      />
      <TextSlice
        text={`100일간 내 마음대로 무제한 수강 가능한\n카테고리별 BEST 강의 라인업을 아래에서 확인해보세요!`}
        sliceStyle={{
          textSize: 14,
          textColor: STATIC_LIGHT.color.white,
          backgroundColor: STATIC_LIGHT.color.black,
        }}
      />
      <ImageSlice
        imageUrl={"benefit.webp"}
        alt="주요 행사 강의 목록 및 일자 안내 이미지, 강의 하나 구매 시 추가 강의는 100원에 구매 가능"
        sliceStyle={{
          paddingX: 8,
          backgroundColor: STATIC_LIGHT.color.black,
        }}
      />
      <ImageSlider
        images={imageUrl}
        slicestyle={{ backgroundColor: STATIC_LIGHT.gray[900] }}
      />
    </MobileFirstLayout>
  );
};

export default PlaygroundPage;

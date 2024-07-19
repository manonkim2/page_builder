import { vars } from "@manon/themes";
import MobileFirstLayout from "../components/view/MobileFirstLayout";
import TextSlice from "../components/view/slices/Text";
import ImageSlice from "../components/view/slices/Image";
import { CDN_BASE_URL } from "../constants";

const PlaygroundPage = () => {
  return (
    <MobileFirstLayout>
      <TextSlice
        text="본 이벤트는 종료되었습니다."
        sliceStyle={{
          textColor: vars.colors.$static.light.color.white,
          backgroundColor: vars.colors.$static.light.color.black,
          textSize: 16,
          textWeight: 700,
        }}
      />
      <ImageSlice
        imageUrl={`${CDN_BASE_URL}/main_sample.webp`}
        alt="온라인 강의 단돈 100원"
        sliceStyle={{
          padding: 0,
          backgroundColor: "#FFD951",
        }}
      />
    </MobileFirstLayout>
  );
};

export default PlaygroundPage;

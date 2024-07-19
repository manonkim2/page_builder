import { vars } from "@manon/themes";
import { CDN_BASE_URL } from "../constants";

import MobileFirstLayout from "../components/view/MobileFirstLayout";

const PlaygroundPage = () => {
  return (
    <MobileFirstLayout>
      <h1 className="text-white">{vars.colors.$scale.gray[900]}</h1>
      <img src={`${CDN_BASE_URL}/main_sample.webp`} />
    </MobileFirstLayout>
  );
};

export default PlaygroundPage;

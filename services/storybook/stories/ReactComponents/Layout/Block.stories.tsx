import "@manon/react-components-layout/style.css";
import { Block as _Block } from "@manon/react-components-layout";

export default {
  title: "Block",
  component: _Block,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["light", "dark"],
    },
    tags: ["autodocs"],
  },
};

export const FirstStory = {};

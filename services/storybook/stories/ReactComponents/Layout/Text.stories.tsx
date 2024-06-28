import "@manon/react-components-layout/style.css";
import { Text as _Text } from "@manon/react-components-layout";
import { classes, vars } from "@manon/themes";

export default {
  title: "React Component - Text",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["p", "span", "div", "b", "i", "u", "strong", "em"],
      control: "select",
    },
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export const Text = {
  args: {
    as: "p",
    children: "Hello World",
  },
};

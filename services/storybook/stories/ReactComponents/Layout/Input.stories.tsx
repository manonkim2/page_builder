import React from "react";
import "@manon/react-components-input/style.css";
import {
  Input,
  InputGroup,
  InputLeftAddon,
} from "@manon/react-components-input";

export default {
  title: "React Components/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const InputStory = {
  render: () => <Input placeholder="dd" />,
};

export const InputGroupStory = {
  render: () => (
    <InputGroup>
      <InputLeftAddon>$</InputLeftAddon>
      <Input placeholder="dd" />
    </InputGroup>
  ),
};

export const InputFocusVisibleState = {
  render: () => <Input />,
  parameters: {
    pseudo: { focusVisible: true },
  },
};

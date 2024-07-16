import React from "react";
import "@manon/react-components-button/style.css";
import { Button as _Button } from "@manon/react-components-button";
import { useButton, useToggleButton } from "@manon/react-hooks-button";
import { Text } from "@manon/react-components-layout";
import { vars } from "@manon/themes";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const ButtonStory = {
  args: {
    size: "md",
    children: "Button",
    variant: "solid",
    isDisabled: false,
    isLoading: false,
    leftIcon: "⭐️",
  },
};

export const TextButtonStory = {
  render: () => {
    const { buttonProps } = useButton({
      elementType: "div",
      onClick: () => {
        console.log("hi");
      },
    });

    return (
      <Text
        {...buttonProps}
        as="div"
        fontSize="md"
        color="blue"
        style={{ userSelect: "none", cursor: "pointer" }}
      >
        text button
      </Text>
    );
  },
};

export const ToggleButtonStory = {
  render: () => {
    const { buttonProps, isSelected } = useToggleButton(
      {
        elementType: "button",
      },
      false,
    );

    return (
      <_Button
        {...buttonProps}
        variant={isSelected ? "solid" : "outline"}
        color="blue"
      >
        {isSelected ? "🙂" : "🙃"}
      </_Button>
    );
  },
};

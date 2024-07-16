import React from "react";

import { render, screen } from "../../../test/test-utils";
import { describe, expect, it } from "vitest";
import { composeStories } from "@storybook/react";

import * as stories from "./Accordion.stories";

const { AccordionTestStory } = composeStories(stories);

describe("Accordion Test", () => {
  it("Accordion 버튼 클릭 시 AccordionPanel 펼쳐지는지 확인", async () => {
    // GIVEN
    const args = {
      items: [
        {
          name: "목록1",
          content: "목록1 내용입니다.",
        },
      ],
      defaultActiveItems: [],
    };

    // WHEN
    render(<AccordionTestStory {...args} />);

    // THEN
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );

    await screen.getByTestId("button-0").click();
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "true",
    );
  });

  it("두번째 accordion 버튼 클릭 . 시두번째 accordionpanel 펼쳐지는지 확인", async () => {
    const args = {
      items: [
        {
          name: "목록1",
          content: "목록1 내용입니다.",
        },
        {
          name: "목록2",
          content: "목록2 내용입니다.",
        },
      ],
      defaultActiveItems: [],
    };

    render(<AccordionTestStory {...args} />);

    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );
    expect(screen.getByTestId("panel-1")).toHaveAttribute(
      "data-action-item",
      "false",
    );

    await screen.getByTestId("button-1").click();
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );
    expect(screen.getByTestId("panel-1")).toHaveAttribute(
      "data-action-item",
      "true",
    );
  });

  it("활성화 되어있는 accordion 버튼 클릭시 panel 접히는지 확인", async () => {
    const args = {
      items: [
        {
          name: "목록1",
          content: "목록1 내용입니다.",
        },
      ],
      defaultActiveItems: [],
    };

    render(<AccordionTestStory {...args} />);
    await expect(screen.getByTestId("button-0").click());

    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "true",
    );

    await screen.getByTestId("button-0").click();
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "false",
    );
  });
});

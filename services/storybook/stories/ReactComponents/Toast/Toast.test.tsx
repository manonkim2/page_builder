import React from "react";

import { describe, expect, it, vi } from "vitest";
import { composeStories } from "@storybook/react";

import { render, screen, userEvent, waitFor } from "../../../test/test-utils";
import * as stories from "./Toast.stories";

const { ToastStory } = composeStories(stories);

describe("Toast Test", () => {
  it("Toast 버튼 클릭 시 Toast 메시지가 뜨는지 확인", async () => {
    render(<ToastStory />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    });
  });

  it("Toast 클릭 후 3초 뒤  Toast가 사라지는지 확인", async () => {
    // GIVEN
    vi.useFakeTimers();
    const { container } = render(<ToastStory />);

    // WHEN
    const button = screen.getByRole("button");
    userEvent.click(button);

    const toastContainer = container.querySelector("#toast-container");

    // THEN
    await vi.advanceTimersByTimeAsync(3001);
    expect(toastContainer?.hasChildNodes()).toBeFalsy();
  });
});

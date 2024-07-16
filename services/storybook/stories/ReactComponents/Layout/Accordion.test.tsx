import React from "react";

import { render, screen } from "../../../test/test-utils";
import { describe, expect, it, test } from "vitest";

describe("Accordion", () => {
  it("should render", () => {
    render(<div>test</div>);

    expect(screen.getByText("test"));
  });
});

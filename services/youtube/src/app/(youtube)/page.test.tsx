import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Page from "./page";

describe("youtube main page data fetching", () => {
  it("페에지 init시 불러올 데이터가 없다면 스켈레톤 노출", () => {
    render(<Page />);

    expect(screen.getByTestId("VideosPopularListSkeleton")).toBeInTheDocument();
  });
});

import SearchNavigarionBar from "@/src/shared/components/SearchNavigationBar";
import { NAVIGATION_BAR_HEIGHT } from "@/src/shared/components/SearchNavigationBar/style.css";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SearchNavigarionBar />
      <div style={{ marginTop: NAVIGATION_BAR_HEIGHT }}>{children}</div>
    </div>
  );
};

export default Layout;

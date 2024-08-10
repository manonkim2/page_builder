"use client";

import React, { useEffect, useState } from "react";
import { isMocking } from "../../constants";
import { initMocking } from "../../mocks";

const MSWProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setisReady] = useState(!isMocking());

  useEffect(() => {
    if (!isReady) {
      async () => {
        await initMocking();

        setisReady(true);
      };
    }
  }, [isReady]);

  if (!isReady) return null;

  return children;
};

export default MSWProvider;

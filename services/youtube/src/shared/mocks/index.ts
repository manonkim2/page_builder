export const initMocking = async () => {
  // node 환경
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen({ onUnhandledRequest: "bypass" });
  } else {
    // 브라우저 환경
    const { worker } = await import("./browser");
    worker.start({ onUnhandledRequest: "bypass" });
  }
};

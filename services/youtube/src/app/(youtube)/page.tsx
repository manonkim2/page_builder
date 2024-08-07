import { Suspense } from "react";

import VideoPopularList from "@/src/features/main/components/VideoPopularList";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>loading...</div>}>
        <VideoPopularList />
      </Suspense>
    </main>
  );
}

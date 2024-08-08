import { Suspense } from "react";

import VideoPopularList from "@/src/features/main/components/VideoPopularList";
import { VideosPopularListSkeleton } from "@/src/features/main/components/VideoPopularList/Skeleton";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<VideosPopularListSkeleton />}>
        <VideoPopularList />
      </Suspense>
    </main>
  );
}

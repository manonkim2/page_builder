"use client";

import VisibilityLoader from "@/src/shared/components/VisibilityLoader";
import { useGetVideoPopularList } from "../../hooks/useGetVideiosPopularList";
import * as s from "./style.css";
import VideoPopularListItem from "./ListItem";

const VideoPopularList = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetVideoPopularList({});

  const flatData = data.pages.map((page) => page?.lists ?? []).flat();

  return (
    <>
      <section className={s.wrapper}>
        {flatData.map((item) => (
          <VideoPopularListItem key={item.videoId} video={item} />
        ))}
      </section>
      {hasNextPage && (
        <VisibilityLoader
          callback={() => {
            !isFetchingNextPage && fetchNextPage();
          }}
        />
      )}
    </>
  );
};

export default VideoPopularList;

"use client";

import { useGetVideoPopularList } from "../../hooks/useGetVideiosPopularList";
import * as s from "./index.css";
import VideoPopularListItem from "./ListItem";

const VideoPopularList = () => {
  const { data } = useGetVideoPopularList({});

  const flatData = data.pages.map((page) => page?.lists ?? []).flat();

  return (
    <section className={s.wrapper}>
      {flatData.map((item) => (
        <VideoPopularListItem key={item.videoId} video={item} />
      ))}
    </section>
  );
};

export default VideoPopularList;

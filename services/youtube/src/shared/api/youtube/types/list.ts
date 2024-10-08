import { VideoThumbnail } from "./item";

export type ListPageApiInfo = {
  nextPageToken?: string;
  prevPageToken?: string;
  totlaResults: number;
};

export type VideoListItem = {
  videoId: string;
  title: string;
  description: string;
  channelId: string;
  channelTitle: string;
  thumbnail: VideoThumbnail;
  publishedAt: string;
  publishedAtDisplayText: string;
};

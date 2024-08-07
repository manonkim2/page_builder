import { API_BASE_URL } from "@/src/shared/api/constants";
import { VideoThumbnail } from "@/src/shared/api/youtube/types/item";
import { ListPageApiInfo } from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import queryString from "query-string";

export type GetVideoPopularListRequestParams = Pick<
  youtube_v3.Params$Resource$Videos$List,
  "maxResults" | "pageToken"
>;

export type PopularListItem = {
  videoId: string;
  title: string;
  description: string;
  channelId: string;
  channelTitle: string;
  thumbnail: VideoThumbnail;
  publishedAt: string;
  publishedAtDisplayText: string; // 1개월 전
  viewCount: number;
  viewCountDisplayText: string; // 23만
};

export type GetVideosPopularListResponse = {
  lists: PopularListItem[];
} & ListPageApiInfo;

export const getVideoPopularListPath = "/api/video/popular-list";

export const getVideoPopularList = async (
  params: GetVideoPopularListRequestParams,
): Promise<GetVideosPopularListResponse> => {
  const queryParams = queryString.stringify(params);

  const url = `${API_BASE_URL}${getVideoPopularListPath}?${queryParams}`;

  const response = await fetch(url);

  return await response.json();
};

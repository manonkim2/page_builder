import { API_BASE_URL } from "@/src/shared/api/constants";
import {
  ListPageApiInfo,
  VideoListItem,
} from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import queryString from "query-string";

export type SearchOrder = "date" | "relevance" | "viewCount";

export type GetSearchVideosListRequestParams = Pick<
  youtube_v3.Params$Resource$Search$List,
  "q" | "pageToken"
> & {
  order?: SearchOrder;
};

export type SearchVideosListItem = VideoListItem;

export type GetSearchVideosListResponse = {
  lists: SearchVideosListItem[];
} & ListPageApiInfo;

export const getSearchVideosListUrl = `${API_BASE_URL}/api/video/popular-list`;

export const getSearchVideosList = async (
  params: GetSearchVideosListRequestParams,
): Promise<GetSearchVideosListResponse> => {
  const queryParams = queryString.stringify(params);

  const url = `${getSearchVideosListUrl}?${queryParams}`;

  const response = await fetch(url);

  return await response.json();
};

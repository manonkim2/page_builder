import {
  InfiniteData,
  useSuspenseInfiniteQuery,
  UseSuspenseInfiniteQueryResult,
} from "@tanstack/react-query";
import {
  getVideoPopularList,
  GetVideoPopularListRequestParams,
  GetVideosPopularListResponse,
  getVideosPopularListUrl,
} from "../api/getVideosPopularList";

type Params = Pick<GetVideoPopularListRequestParams, "maxResults"> & {
  initPageToken?: string;
};

export const useGetVideoPopularList = ({
  maxResults,
  initPageToken,
}: Params): UseSuspenseInfiniteQueryResult<
  InfiniteData<GetVideosPopularListResponse>
> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["videos", getVideosPopularListUrl, maxResults, initPageToken],
    queryFn: async ({ pageParam = initPageToken }) => {
      return await getVideoPopularList({ maxResults, pageToken: pageParam });
    },
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
    getPreviousPageParam: (firstPage) => firstPage.prevPageToken,
  });
};

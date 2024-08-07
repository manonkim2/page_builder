import {
  InfiniteData,
  useSuspenseInfiniteQuery,
  UseSuspenseInfiniteQueryResult,
} from "@tanstack/react-query";
import {
  getVideoPopularList,
  GetVideoPopularListRequestParams,
  GetVideosPopularListResponse,
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
    queryKey: ["videoPopularList", { maxResults }],
    queryFn: async ({ pageParam = initPageToken }) => {
      return await getVideoPopularList({ maxResults, pageToken: pageParam });
    },
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
    getPreviousPageParam: (firstPage) => firstPage.prevPageToken,
  });
};

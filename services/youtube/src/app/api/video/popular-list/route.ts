import { youtube_v3 } from "googleapis";
import { type NextRequest } from "next/server";
import { youtubeServerInstance } from "@/src/shared/api/youtube/server/instance";
import {
  GetVideoPopularListRequestParams,
  GetVideosPopularListResponse,
} from "@/src/features/main/api/getVideosPopularList";
import { formatKoreanTextCompareDatesFromNow } from "@/src/shared/utils/date";
import { formatNumberToKoreanText } from "@/src/shared/utils/number";

export const GET = async (request: NextRequest) => {
  const queryParams = parseQueryParams(request.nextUrl.searchParams);

  try {
    const { data } = await youtubeServerInstance.videos.list({
      part: ["snippet", "statistics"],
      chart: "mostPopular",
      regionCode: "KR",
      ...queryParams,
    });

    const mappedData = mappingResponse(data);

    return Response.json(mappedData);
  } catch {
    return new Response(JSON.stringify({ message: "server error" }), {
      status: 500,
    });
  }
};

const parseQueryParams = (
  params: URLSearchParams,
): GetVideoPopularListRequestParams => {
  return {
    maxResults: Number(params.get("maxResults") ?? 10),
    pageToken: params.get("pageToken") ?? undefined,
  };
};

const mappingResponse = (
  data: youtube_v3.Schema$VideoListResponse,
): GetVideosPopularListResponse => {
  const lists =
    data.items?.map(({ id, snippet, statistics }) => {
      const publishedAt = snippet?.publishedAt ?? "";
      const parsedViewCount = parseInt(statistics?.viewCount ?? "0");

      return {
        videoId: id ?? "",
        title: snippet?.title ?? "",
        description: snippet?.description ?? "",
        channelId: snippet?.channelId ?? "",
        channelTitle: snippet?.channelTitle ?? "",
        thumbnail: {
          url: snippet?.thumbnails?.medium?.url ?? "",
        },
        publishedAt,
        publishedAtDisplayText:
          formatKoreanTextCompareDatesFromNow(publishedAt),
        viewCount: parsedViewCount,
        viewCountDisplayText: formatNumberToKoreanText(parsedViewCount, true),
      };
    }) ?? [];

  return {
    lists,
    nextPageToken: data.nextPageToken ?? undefined,
    prevPageToken: data.prevPageToken ?? undefined,
    totlaResults: data.pageInfo?.totalResults ?? 0,
  };
};

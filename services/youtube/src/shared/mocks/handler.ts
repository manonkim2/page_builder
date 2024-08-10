import { getMockVideosPopularList } from "@/src/features/main/api/getVideoPopularList.mock";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [getMockVideosPopularList];

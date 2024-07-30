import { ViewSchemaProps } from "@/src/utils/validation/schema/types";
import { WORKER_BASE_PATH, workerInstance } from ".";
import { ViewMetadata } from "./type";

const getViewListPath = () => WORKER_BASE_PATH;

export type ViewKeydata = {
  name: string;
  metadata: ViewMetadata;
};

export type ViewListResponseData = {
  keys: ViewKeydata[];
};

export const getViewList = async () => {
  const response = await workerInstance(getViewListPath());

  const responseData = {
    keys: response.data.data.keys,
  };

  return responseData as ViewListResponseData;
};

import { WORKER_BASE_PATH, workerInstance } from ".";
import { getGetViewDetailPath } from "./getViewDetail";
import { ViewMetadata } from "./type";

type ViewDetailRequestData = {
  value: string;
  metadata: ViewMetadata;
};

type Params = {
  viewId: string;
  data: ViewDetailRequestData;
};

export const putViewDetail = async ({ viewId, data }: Params) => {
  const response = await workerInstance.put(getGetViewDetailPath(viewId), data);

  console.log("res", response);
};

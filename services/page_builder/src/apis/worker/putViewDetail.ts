import { WORKER_BASE_PATH, workerInstance } from ".";
import { ViewMetadata } from "./type";

type ViewDetailRequestData = {
  value: string;
  metadata: ViewMetadata;
};

type Params = {
  viewId: string;
  data: ViewDetailRequestData;
};

const getPutViewDetailPath = (viewId: string) =>
  `${WORKER_BASE_PATH}/${viewId}`;

export const putViewDetail = async ({ viewId, data }: Params) => {
  const response = await workerInstance.put(getPutViewDetailPath(viewId), data);

  console.log("res", response);
};

import { workerInstance } from ".";
import { getGetViewDetailPath } from "./getViewDetail";

type deleteViewDetailtype = {
  viewId: string;
};

export const deleteViewDetail = async ({ viewId }: deleteViewDetailtype) => {
  await workerInstance.delete(getGetViewDetailPath(viewId));
};

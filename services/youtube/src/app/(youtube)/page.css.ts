import { SCALE_COLOR } from "@/src/shared/styles/constants";
import { f } from "@/src/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const main = style([
  f.flexCenterBox,
  f.directionColumn,
  f.hScreen,
  f.wScreen,
  f.color.static.dark,
  {
    backgroundColor: SCALE_COLOR.gray[600],
  },
]);

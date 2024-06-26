import { vars } from "@manon/themes";
import { style } from "@vanilla-extract/css";

export const BlockStyle = style({
  width: "100px",
  height: "100px",
  backgroundColor: vars.colors.$scale.blue[500],
});

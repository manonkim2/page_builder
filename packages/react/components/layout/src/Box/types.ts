import { vars } from "@manon/themes";
import { AsElementProps, StyleProps } from "../core/types";
import * as React from "react";

export type BoxProps = AsElementProps & StyleProps;

export type DividerProps = {
  direction?: "horizontal" | "vertical";
  color?: keyof typeof vars.colors.$scale;
  size?: number;
  variant?: "solid" | "dashed";
} & React.HTMLAttributes<HTMLHRElement>;

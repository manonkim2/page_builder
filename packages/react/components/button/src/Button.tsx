import * as React from "react";
import { clsx } from "clsx";
import { vars } from "@manon/themes";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { ButtonProps } from "./types";
import {
  activeColorVariant,
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
} from "./style.css";

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
      color = "orange",
      size = "md",
      variant = "solid",

      isDisabled = false,
      children,
      style,
    } = props;

    const enableColor = vars.colors.$scale[color][500];
    const hoverColor =
      variant === "solid"
        ? vars.colors.$scale[color][600]
        : vars.colors.$scale[color][50];
    const activeColor =
      variant === "solid"
        ? vars.colors.$scale[color][700]
        : vars.colors.$scale[color][100];

    return (
      <button
        {...props}
        ref={ref}
        className={clsx([buttonStyle({ size, variant })])}
        disabled={isDisabled}
        style={{
          ...assignInlineVars({
            [enableColorVariant]: enableColor,
            [hoverColorVariant]: hoverColor,
            [activeColorVariant]: activeColor,
          }),
          ...style,
        }}
      >
        {children}
      </button>
    );
  },
);

export { Button };

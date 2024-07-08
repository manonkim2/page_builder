import * as React from "react";
import { clsx } from "clsx";
import { vars } from "@manon/themes";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { ButtonProps } from "./types";
import { useButton } from "@manon/react-hooks-button";
import {
  activeColorVariant,
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
  spanStyle,
  spinnerStyle,
} from "./style.css";

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const { buttonProps } = useButton(props);
    const {
      color = "orange",
      size = "md",
      variant = "solid",

      leftIcon,
      rightIcon,

      isLoading,
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
        {...buttonProps}
        ref={ref}
        className={clsx([buttonStyle({ size, variant })])}
        style={{
          ...assignInlineVars({
            [enableColorVariant]: enableColor,
            [hoverColorVariant]: hoverColor,
            [activeColorVariant]: activeColor,
          }),
          ...style,
        }}
      >
        {isLoading && <div className={spinnerStyle({ size })} />}
        {leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>}
      </button>
    );
  },
);

export { Button };

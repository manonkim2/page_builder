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
  spanStyle,
  spinnerStyle,
} from "./style.css";

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
      color = "orange",
      size = "md",
      variant = "solid",

      leftIcon,
      rightIcon,

      isLoading,
      isDisabled = false,
      children,
      style,
      onKeyDown,
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

    const disabled = isDisabled || isLoading;

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      onkeydown?.(event);

      if (event.key === "Enter" || event.key === "13") {
        event.preventDefault();
        event.currentTarget.click();
      }
    };

    return (
      <button
        {...props}
        ref={ref}
        className={clsx([buttonStyle({ size, variant })])}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        onClick={() => console.log("hi")}
        role="button"
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

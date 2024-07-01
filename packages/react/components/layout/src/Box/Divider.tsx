import * as React from "react";
import { DividerProps } from "./types";
import { vars } from "@manon/themes";

const Divider = React.forwardRef(
  (props: DividerProps, ref: React.Ref<HTMLHRElement>) => {
    const {
      color = "gray",
      direction = "horizontal",
      variant = "solid",
      size = 1,
    } = props;

    const borderStyle =
      direction === "horizontal"
        ? {
            width: "100%",
            borderWidth: `0 0 ${size}px 0`,
          }
        : {
            height: "100%",
            borderWidth: `0 0 0 ${size}px`,
          };

    return (
      <hr
        {...props}
        ref={ref}
        style={{
          borderStyle: variant,
          borderColor: color && vars.colors.$scale?.[color]?.[200],
          ...borderStyle,
          ...props.style,
        }}
      />
    );
  },
);

export { Divider };

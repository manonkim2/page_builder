import * as React from "react";
import { TextProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@manon/themes";
import { textStyle } from "./style.css";

const Text = React.forwardRef(
  (props: TextProps, ref: React.Ref<HTMLElement>) => {
    const { as = "p", color = "gray", background, fontSize, children } = props;

    return React.createElement(
      as,
      {
        ...props,
        ref,
        className: clsx([
          StyleSprinkles(
            extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
          ),
          textStyle({ fontSize }),
          props.className,
        ]),
        style: {
          color: color && vars.colors.$scale?.[color]?.[700],
          background: background && vars.colors.$scale?.[background]?.[100],
          ...props.style,
        },
      },
      children,
    );
  },
);

export { Text };

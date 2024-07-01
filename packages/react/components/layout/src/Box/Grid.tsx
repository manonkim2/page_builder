import * as React from "react";
import { clsx } from "clsx";
import { vars } from "@manon/themes";

import { StyleSprinkles } from "../core/style.css";
import { GridProps } from "./types";
import { extractSprinkleProps } from "../utils/properties";

const Grid = React.forwardRef(
  (props: GridProps, ref: React.Ref<HTMLElement>) => {
    const {
      as = "div",
      color,
      background,
      autoColumns,
      autoFlow,
      autoRows,
      columnGap,
      gap,
      row,
      rowGap,
      templateAreas,
      templateColumns,
      templateRows,
      children,
      column,
    } = props;

    return React.createElement(
      as,
      {
        ...props,
        ref,
        className: clsx([
          StyleSprinkles(
            extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
          ),
          props.className,
        ]),
        style: {
          display: "grid",
          gridAutoColumns: autoColumns,
          gridAutoFlow: autoFlow,
          gridAutoRows: autoRows,
          gridColumnGap: columnGap,
          gridGap: gap,
          gridRowGap: rowGap,
          gridTemplateColumns: templateColumns,
          gridTemplateRows: templateRows,
          gridTemplateAreas: templateAreas,
          gridColumn: column,
          gridRow: row,
          color: vars.colors.$scale?.[color]?.[700] ?? color,
          background: vars.colors.$scale?.[background]?.[100] ?? background,
          ...props.style,
        },
      },
      children,
    );
  },
);

export { Grid };

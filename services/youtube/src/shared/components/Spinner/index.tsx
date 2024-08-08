import * as s from "./style.css";
import { SCALE_COLOR } from "../../styles/constants";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface ISpinnerProps {
  size?: number;
  color?: string;
}

const Spinner = ({
  size = 24,
  color = SCALE_COLOR.gray[900],
}: ISpinnerProps) => {
  return (
    <div
      className={s.wrapper}
      style={{
        ...assignInlineVars({
          [s.sizeVar]: `${size}px`,
        }),
      }}
    >
      <div
        className={s.inner}
        style={{
          ...assignInlineVars({
            [s.innerBorderColorVar]: color,
          }),
        }}
      />
    </div>
  );
};

export default Spinner;

import { SCALE_COLOR } from "@/src/shared/styles/constants";
import { HTMLAttributes } from "react";

type Props = Pick<HTMLAttributes<HTMLDivElement>, "style">;

const Skeleton = ({ style }: Props) => {
  return (
    <div
      style={{
        pointerEvents: "none",
        width: "100%",
        height: "1.25rem",
        borderRadius: "0.125rem",
        backgroundColor: SCALE_COLOR.gray[200],
        ...style,
      }}
    />
  );
};

export default Skeleton;

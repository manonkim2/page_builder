import {
  useIntersectionObserver,
  UseIntersectionObservertype,
} from "../../hooks/useIntersectionObserver";
import Spinner from "../Spinner";
import * as s from "./style.css";

type IVisibilityLoaderProps = {
  children?: React.ReactNode;
} & UseIntersectionObservertype;

const VisibilityLoader = ({
  children = <Spinner />,
  ...observerProps
}: IVisibilityLoaderProps) => {
  const { ref } = useIntersectionObserver(observerProps);
  return (
    <div ref={ref} className={s.wrapper}>
      <div>{children}</div>
    </div>
  );
};

export default VisibilityLoader;

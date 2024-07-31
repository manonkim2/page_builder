import { STATIC_LIGHT } from "@/src/styles/constants";
import { FlexProps, Flex } from "@manon/react-components-layout";

type IDesktopFirstNavProps = FlexProps;

const DesktopFirstNav = (props: IDesktopFirstNavProps) => {
  const {
    children,
    padding = 2,
    boxShadow = "base",
    justify = "right",
    className,
    ...rest
  } = props;

  const currentClassName = ["w-full h-[56px] fixed top-0 z-50", className].join(
    " ",
  );

  return (
    <Flex
      {...rest}
      padding={padding}
      justify={justify}
      boxShadow={boxShadow}
      className={currentClassName}
      style={{
        background: STATIC_LIGHT.color.white,
      }}
    >
      {children}
    </Flex>
  );
};

export default DesktopFirstNav;

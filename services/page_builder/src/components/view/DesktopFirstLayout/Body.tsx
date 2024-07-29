import { Flex, FlexProps } from "@manon/react-components-layout";

type DesktopFirstBodyProps = FlexProps;

const DesktopFirstBody = (props: DesktopFirstBodyProps) => {
  const { children, padding = 2, className, ...rest } = props;

  const currentClassName = [
    "w-full min-h-screen relative top-0 pt-[56px]",
    className,
  ].join(" ");

  return (
    <Flex {...rest} padding={padding} className={currentClassName}>
      {children}
    </Flex>
  );
};

export default DesktopFirstBody;

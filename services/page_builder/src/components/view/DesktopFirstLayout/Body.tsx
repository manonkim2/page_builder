import { BoxProps, Box } from "@manon/react-components-layout";

type IDesktopFirstBodyProps = BoxProps;

const DesktopFirstBody = (props: BoxProps) => {
  const { children, padding = 2, className, ...rest } = props;

  const currentClassName = [
    "w-full min-h-screen relative top-0 pt-[56px]",
    className,
  ].join(" ");

  return (
    <Box {...rest} padding={padding} className={currentClassName}>
      {children}
    </Box>
  );
};

export default DesktopFirstBody;

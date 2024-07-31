import { BoxProps, Box } from "@manon/react-components-layout";

type IDesktopFirstLayoutProps = BoxProps;

const DesktopFirstLayout = (props: IDesktopFirstLayoutProps) => {
  const { children, className, ...rest } = props;

  const currentClassName = ["min-h-full w-full relative", className].join(" ");

  return (
    <Box {...rest} className={currentClassName}>
      {children}
    </Box>
  );
};

export default DesktopFirstLayout;

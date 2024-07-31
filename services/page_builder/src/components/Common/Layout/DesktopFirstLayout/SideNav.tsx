import { Box, BoxProps } from "@manon/react-components-layout";

type SideNaveProps = BoxProps;

const SideNav = (props: SideNaveProps) => {
  const { children, background = "gray", className, ...rest } = props;
  const currentClassName = ["w-[280px] z-10", className].join(" ");

  return (
    <Box {...rest} background={background} className={currentClassName}>
      {children}
    </Box>
  );
};

export default SideNav;

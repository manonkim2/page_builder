import { Flex, Heading } from "@manon/react-components-layout";

const Error404Page = () => {
  return (
    <div className="w-screen h-screen flx justify-center">
      <Flex className="pt-[200px]" direction="column" align="center" gap={8}>
        <Heading fontSize="2xl">Not Found</Heading>
      </Flex>
    </div>
  );
};

export default Error404Page;

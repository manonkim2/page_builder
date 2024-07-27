import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { CDN_BASE_URL } from "@/src/constants";
import { useViewSchemaSlices } from "@/src/hooks/useViewSchemaSlices";
import MobileFirstLayout from "@/src/components/view/MobileFirstLayout";
import { ViewSchemaProps } from "@/src/utils/validation/schema/types";

const ViewPage = ({
  jsonSchema,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const slices = useViewSchemaSlices(jsonSchema);

  return (
    <MobileFirstLayout>
      {/* JSON SCHEMA 기반으로 컴포넌트가 동적 생성 */}
      {slices}
    </MobileFirstLayout>
  );
};

export default ViewPage;

export const getStaticProps: GetStaticProps<{
  jsonSchema: ViewSchemaProps;
}> = async (context) => {
  const slug = (context.params?.slug as string) ?? "";

  // slug - '패스트캠퍼스-온라인-강의-프로모션-100원-이벤트-${viewId}'

  const slicedSlug = slug.split("-");
  const viewId = slicedSlug[slicedSlug.length - 1];

  const response = await fetch(`${CDN_BASE_URL}/view/${viewId}.json`);

  if (response.status === 200) {
    const jsonData = await response.json();

    return {
      props: {
        jsonSchema: jsonData,
      },
      revalidate: 10,
    };
  }

  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

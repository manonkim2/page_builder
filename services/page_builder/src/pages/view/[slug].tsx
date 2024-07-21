import React, { useMemo } from "react";

import MobileFirstLayout from "@/src/components/view/MobileFirstLayout";

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { CDN_MOCK_URL } from "@/src/constants";
import TextSlice from "@/src/components/view/slices/Text";
import ImageSlice from "@/src/components/view/slices/Image";
import SpacingSlice from "@/src/components/view/slices/Spacing";
import ImageSlider from "@/src/components/view/slices/ImageSlider";
import MetaDataSlice, {
  IMetaDataSliceProps,
} from "@/src/components/view/slices/MetaData";

type Schema = {
  id: string;
  slug: string;
  metadata?: IMetaDataSliceProps;
  slices: {
    sliceName:
      | "TextSlice"
      | "ImageSlice"
      | "SpacingSlice"
      | "ImageSliderSectionSlice";
    data: any;
  }[];
};

const ViewPage = ({
  jsonSchema,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const slices = useMemo(() => {
    const sliceList = [] as React.ReactNode[];

    if (jsonSchema.metadata) {
      sliceList.push(<MetaDataSlice {...jsonSchema.metadata} />);
    }

    jsonSchema.slices.forEach(({ sliceName, data }) => {
      switch (sliceName) {
        case "TextSlice":
          sliceList.push(<TextSlice {...data} />);
          break;
        case "ImageSlice":
          sliceList.push(<ImageSlice {...data} />);
          break;
        case "SpacingSlice":
          sliceList.push(<SpacingSlice {...data} />);
          break;
        case "ImageSliderSectionSlice":
          sliceList.push(<ImageSlider {...data} />);
          break;
      }
    });

    return sliceList;
  }, []);

  return (
    <MobileFirstLayout>
      {/* JSON shema 기반으로 컴포넌트 동적 생성 */}
      {slices}
    </MobileFirstLayout>
  );
};

export default ViewPage;

export const getStaticProps: GetStaticProps<{
  jsonSchema: Schema;
}> = async (context) => {
  const slug = (context.params?.slug as string) ?? "";

  const slicedSlug = slug.split("-");
  const viewId = slicedSlug[slicedSlug.length - 1];

  const response = await fetch(`${CDN_MOCK_URL}/${viewId}.json`);

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

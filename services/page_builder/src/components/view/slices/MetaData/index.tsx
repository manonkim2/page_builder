import { MetadataSliceSchema } from "@/src/utils/validation/schema/slices";
import { SchemaProps } from "@/src/utils/validation/schema/types";
import Head from "next/head";

type MetaDataSliceProps = SchemaProps<typeof MetadataSliceSchema>;

const MetaDataSlice = ({
  title,
  ogDescription,
  ogTitle,
}: MetaDataSliceProps) => {
  const currentOGTitle = ogTitle ?? title;

  return (
    <Head>
      {title && <title>{title}</title>}
      {currentOGTitle && <meta property="og:title" content={currentOGTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
    </Head>
  );
};

export default MetaDataSlice;

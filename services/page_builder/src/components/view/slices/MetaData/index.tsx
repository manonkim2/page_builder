import Head from "next/head";

export type IMetaDataSliceProps = {
  title?: string;
  ogTitle?: string;
  ogDescription?: string;
};

const MetaDataSlice = ({
  title,
  ogDescription,
  ogTitle,
}: IMetaDataSliceProps) => {
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

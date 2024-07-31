import { useMemo } from "react";
import MetaDataSlice from "../components/Features/view/slices/MetaData";
import ImageSlice from "../components/Features/view/slices/Image";
import SpacingSlice from "../components/Features/view/slices/Spacing";
import TextSlice from "../components/Features/view/slices/Text";
import { ViewSchemaProps } from "../utils/validation/schema/types";
import { ImageSliderSectionSlice } from "../components/Features/view/slices/ImageSlicerSection";

export const useViewSchemaSlices = (viewSchema: ViewSchemaProps) => {
  const slices = useMemo(() => {
    const sliceList = [] as React.ReactNode[];

    if (viewSchema.metadata) {
      sliceList.push(<MetaDataSlice {...viewSchema.metadata} />);
    }

    viewSchema.slices.forEach(({ sliceName, data }) => {
      switch (sliceName) {
        case "TextSlice": {
          sliceList.push(<TextSlice {...data} />);
          break;
        }
        case "ImageSlice": {
          sliceList.push(<ImageSlice {...data} />);
          break;
        }
        case "SpacingSlice": {
          sliceList.push(<SpacingSlice {...data} />);
          break;
        }
        case "ImageSliderSectionSlice": {
          sliceList.push(<ImageSliderSectionSlice {...data} />);
          break;
        }
      }
    });

    return sliceList;
  }, [viewSchema]);

  return slices;
};

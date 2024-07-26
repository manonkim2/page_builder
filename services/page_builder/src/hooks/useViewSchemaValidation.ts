import { useState } from "react";

type FormatMarker = {
  message: string;
  startLineNumber: number;
  endLineNumber: number;
};

type ValidateError = {
  message: string;
};

type ValidateViewSchemaProps = {
  viewSchema: string;
  onSuccess?: () => void;
  onError?: (error: ValidateError) => void;
};

export const useViewSchemaValidation = () => {
  const [foramtMarkers, setForamtMarkers] = useState<FormatMarker[]>([]);

  const validateViewSchema = ({
    onError,
    onSuccess,
  }: ValidateViewSchemaProps) => {
    const hasFormatmarkers = foramtMarkers.length > 0;

    if (hasFormatmarkers) {
      const firstMarker = foramtMarkers[0];

      return onError?.({
        message: `[L${firstMarker.startLineNumber}:L${firstMarker.endLineNumber}] ${firstMarker.message}`,
      });
    }

    onSuccess?.();
  };

  const handleEditorValidation = (markers: FormatMarker[]) => {
    setForamtMarkers(markers);
  };

  return {
    validateViewSchema,
    handleEditorValidation,
  };
};

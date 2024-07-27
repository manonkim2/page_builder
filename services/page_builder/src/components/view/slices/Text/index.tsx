import { Text } from "@manon/react-components-layout";
import { STATIC_LIGHT } from "@/src/styles/constants";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { TextSliceSchema } from "@/src/utils/validation/schema/slices";

type TextProps = SliceSchemaProps<typeof TextSliceSchema>;

const TextSlice = ({ text, highlightTexts = [], sliceStyle }: TextProps) => {
  const {
    padding = 2,
    paddingX = 2,
    paddingY = 2,
    backgroundColor = STATIC_LIGHT.color.white,
    textColor = STATIC_LIGHT.color.black,
    textSize,
    textWeight,
    textAlign = "center",
    highlightTextColor = STATIC_LIGHT.yellow[400],
    highlightTextWeight,
  } = sliceStyle ?? {};

  const regex = new RegExp(`(${highlightTexts.join("|")})`, "gi");

  const highlightedText = text.split(regex).map((word, index) => {
    if (highlightTexts.some((query) => new RegExp(query, "i").test(word))) {
      return (
        <span
          key={`${word}-${index}`}
          style={{
            color: highlightTextColor,
            fontWeight: highlightTextWeight ?? textWeight,
          }}
        >
          {word}
        </span>
      );
    }

    return word;
  });

  return (
    <Text
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      fontSize="2xl"
      style={{
        backgroundColor,
        color: textColor,
        fontSize: textSize,
        fontWeight: textWeight,
        textAlign,
        whiteSpace: "pre-line",
        wordBreak: "keep-all",
      }}
    >
      {highlightedText}
    </Text>
  );
};

export default TextSlice;

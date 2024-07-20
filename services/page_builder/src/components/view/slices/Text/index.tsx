import { vars } from "@manon/themes";
import { Text } from "@manon/react-components-layout";
import { STATIC_LIGHT } from "@/src/styles/constants";

type Props = {
  text: string;
  highlightTexts?: string[];
  sliceStyle?: {
    padding?: keyof typeof vars.box.spacing;
    paddingX?: keyof typeof vars.box.spacing;
    paddingY?: keyof typeof vars.box.spacing;
    backgroundColor?: string;
    textColor?: string;
    textSize?: keyof typeof vars.typography.fontSize;
    textWeight?: keyof typeof vars.typography.fontWeight;
    textAlign?: "left" | "center" | "right";
    highlightColor?: string;
    highlightWeight?: keyof typeof vars.typography.fontWeight;
  };
};

const TextSlice = ({ text, highlightTexts = [], sliceStyle }: Props) => {
  const {
    padding = 2,
    paddingX = 2,
    paddingY = 2,
    backgroundColor = STATIC_LIGHT.color.white,
    textColor = STATIC_LIGHT.color.black,
    textSize,
    textWeight,
    textAlign = "center",
    highlightColor = STATIC_LIGHT.yellow[400],
    highlightWeight,
  } = sliceStyle ?? {};

  const regex = new RegExp(`(${highlightTexts.join("|")})`, "gi");

  const highlightedText = text.split(regex).map((word, index) => {
    if (highlightTexts.some((query) => new RegExp(query, "i").test(word))) {
      return (
        <span
          key={`${word}-${index}`}
          style={{
            color: highlightColor,
            fontWeight: highlightWeight ?? textWeight,
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

import React from "react";
import { Text } from "@chakra-ui/react";


type PFParagraphProps = {
  variant: string;
  text: string;
  color?: string;
  stylesProps?: Object;
};
export default function PFParagraph({ variant, text, color, stylesProps }: PFParagraphProps) {
  return <Text sx={stylesProps} textAlign="center" color={color} variant={variant}>{text}</Text>;
}

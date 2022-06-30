import React from "react";
import { Text } from "@chakra-ui/react";


type PFParagraphProps = {
  variant: string;
  text: string;
  color?: string;
  stylesProps?: Object;
  after?: any;
  before?: any;
};
export default function PFParagraph({ variant, text, color, stylesProps, before, after }: PFParagraphProps) {
  return <Text _after={after} _before={before} sx={stylesProps} textAlign="center" color={color} variant={variant}>{text}</Text>;
}

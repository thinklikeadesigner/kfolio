import { Heading } from "@chakra-ui/react";
import React from "react";



type PFHeadingProps = {
  variant: string;
  text: string;
  color: string;
  stylesProps?: Object;
};

export default function PFHeading({ variant, text, color, stylesProps }: PFHeadingProps) {
  return (
    <Heading sx={stylesProps} textAlign="center" color={color} variant={variant}>
      {text}
    </Heading>
  );
}

import { Button } from "@chakra-ui/button";
import React from "react";

type PFButtonType = {
  variant?: "ghost" | "solid" | "hover" | "underline";
  size?: any;
  stylesProps?: Object;
  hover?: any;
  before?: any;
  children: any;
  OnClick?: any;
}

export default function PFButton({ variant = "solid", children, stylesProps = {}, OnClick, size, hover, before }: PFButtonType) {
  return <Button
    variant={variant}
    sx={stylesProps}
    onClick={OnClick}
    size={size}
    _hover={hover}
    _before={before}
  >
    {children}
  </Button >;
}

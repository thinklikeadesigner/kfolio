import { IconButton } from "@chakra-ui/button";
import React from "react";
import { Spacing } from "../theme/Spacing";

type PFIconButtonProps = {
  icon: React.ReactElement;
  ariaLabel: string;
  onClick?: any;
  stylesProps?: Object;
  variant?: any;
  hover?: any;
};

//can put styping directly here because we only use this icon once || look atvariant="ghost"

export default function PFIconButton({ icon, ariaLabel, onClick, stylesProps, variant, hover }: PFIconButtonProps) {
  return <IconButton
    icon={icon}
    sx={stylesProps}
    variant={variant}
    _hover={hover}
    h="50px"
    w="50px"
    onClick={onClick}
    ml={Spacing.x1p5}
    fontSize="28px"
    aria-label={ariaLabel}
  />
}

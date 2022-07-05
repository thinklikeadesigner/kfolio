import { Icon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";
import PFButton from "../PFButton/PFButton";
import PFHeading from "../PFHeading/PFHeading";
import { PFLink } from "../PFLink/PFLink";
import PFParagraph from "../PFParagraph/PFParagraph";



type PFNavBarProps = {
  // variant: string;
  // text: string;
  stylesProps?: Object;
  color: string;
};

export default function PFNavBar({ color, stylesProps }: PFNavBarProps) {
  return (
    <Box bg={color} py={{ sm: "18px", md: "36px" }} px={{ sm: "16px", md: "32px", lg: "64px", xl: "104px" }}>
      <Box display={{ sm: "flex", md: "flex", lg: "none" }} >
        <Box w={"100%"} display="flex" justifyContent={"space-between"} alignItems="center">
          <PFHeading variant="h4" color="blanco" text="Kat Rogers Music" />
          <Icon w={["24px"]} h={["24px"]} >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M13 18H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </Icon>
        </Box>
      </Box>
      <Box display={{ sm: "none", md: "none", lg: "flex" }} w="100" h="300px" boxSize="borderBox" d="flex" alignItems="center" justifyContent="space-between" >
        <Box>
          <PFHeading variant="h4" color="blanco" text="Kat Rogers Music" />
        </Box>
        <Box d="flex" gap="40px">
          <PFLink hover={{ borderBottom: "3px solid #47D16E" }} size="size1" href='https://chakra-ui.com' isExternal >About Me</PFLink>
          <PFLink hover={{ borderBottom: "3px solid #47D16E" }} size="size1" href='https://chakra-ui.com' isExternal >Music</PFLink> <PFLink hover={{ borderBottom: "3px solid #47D16E" }} size="size1" href='https://chakra-ui.com' isExternal >Portfolio</PFLink>
        </Box>
        <Box>
          <PFButton variant="solid" size="size5" hover={{ bg: "linear-gradient(270deg, #47D16E 10.81%, #59EBFF 100%)" }}
          ><PFParagraph variant="boton" text="Contact Me" /> </PFButton>
        </Box>
      </Box>
    </Box>
  );
}

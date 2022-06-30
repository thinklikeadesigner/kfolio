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
        <Box bg={color} px="150px" py="12px">
            <Box w="100" h="300px" boxSize="borderBox" d="flex" alignItems="center" justifyContent="space-between" >
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

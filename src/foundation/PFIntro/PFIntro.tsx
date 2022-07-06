import { Typewriter } from 'react-simple-typewriter'
import React from "react";
import { Box, Heading } from '@chakra-ui/react'
// import PFAbility from "../PFAbilityCard/PFAbilityCard";
// import PFHeading from "../PFHeading/PFHeading";
import PFParagraph from "../PFParagraph/PFParagraph";
import PFButton from "../PFButton/PFButton";


type PFIntroProps = {
  children?: any;
};

export const PFIntro = ({ children }: PFIntroProps) => {
  return (
    <Box bg="fondo" d="flex" flexDirection="column" justifyContent="center" minW="100vw" m="0" px={["42px", "0px"]} pt="90px" pb={["64px", "80px"]} alignItems="center" >
      <Box d="flex" justifyContent="center" alignItems="center" flexDir="column" maxW="524px">
        <Heading textAlign="center" color="blanco" variant="h1" sx={{ paddingBottom: "16px" }}>
          Kat Rogers
        </Heading><br />
        <span style={{
          color: '#47D16E', fontWeight: 400,
          fontSize: "24px",
          lineHeight: "32px"
        }}>
          <Typewriter cursor cursorStyle='_' loop={false} words={['Singer', 'Songwriter', 'Musician', 'Sound Engineer', 'DJ']} />
        </span>
        <Box maxW="446px" pt="16px">
          <PFParagraph text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt inventore ullam, sint necessitatibus, odit accusamus aliquam dignissimos autem illo libero ipsa aspernatur, expedita illum. Soluta sunt officiis pariatur nobis." variant="h5" color="blanco" />
        </Box>
        <Box d="flex" mt="30px" flexDirection="row" width="100%" justifyContent="center">
          <Box sx={{
            boxShadow: "0 0 0 1px white",
            width: "fit-content",
            borderRadius: "8px"
          }} _hover={{ boxShadow: "none" }}>

            <PFButton variant="ghost" size="size4" hover={{
              _before: {
                content: '""',
                position: "absolute",
                inset: "0",
                borderRadius: "8px",
                padding: "2px",
                background: "linear-gradient(45deg,#47D16E,#59EBFF) border-box",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, \n           linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude"
              }
            }}
            ><PFParagraph variant="boton" text="Download CV" />  </PFButton>
          </Box>
          <Box w="24px"></Box>
          <PFButton variant="solid" size="size7" hover={{ bg: "linear-gradient(270deg, #47D16E 10.81%, #59EBFF 100%)" }}
          ><PFParagraph variant="boton" text="Listen" />  </PFButton>
        </Box>
      </Box>
    </Box >


  );
}


import React from "react";
import { Box } from '@chakra-ui/react'
import PFAbility from "../PFAbilityCard/PFAbilityCard";
import PFHeading from "../PFHeading/PFHeading";
import PFParagraph from "../PFParagraph/PFParagraph";
import PFButton from "../PFButton/PFButton";
import PFImage from "../PFImage/PFImage"

import { ImageOverlay } from 'react-image-overlay-effect'
import { PFOverlay } from "../PFOverlay/PFOverlay";


type PFProjectsProps = {
  children?: any;
};



export const PFProjects = ({ children }: PFProjectsProps) => {
  return (
    <Box bg="fondo" d="flex" flexDirection="column" justifyContent="center" minW="100vw" m="0" p="0" pt="90px" alignItems="center" >
      <Box py="50px">
        <PFHeading variant="h3" text="Mis habilidades" color="primario" />
        <Box p="relative" d="flex" flexDir={"column"} gap="50px" justifyContent="space-around" mt="50px" alignItems={"center"}>
          <PFOverlay
            image={<PFImage stylesProps={{
              width: "1155px",
              height: "534px",
              /**
               * how does this banner image have a hover effect, and how is the image inside the background work
               */
              //GOOGLE
              borderRadius: "20px"
            }} objectFit="cover" boxSize='100px' src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sb3JmdWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" />} heading={<PFHeading stylesProps={{ position: "absolute", bottom: "68px", left: "47px" }} color="blanco" variant="h3" text="Stardeos - Un lugar justo"></PFHeading>}
            text={<PFParagraph variant="sub1" color="blanco" text="Ver más en Behance desktop" stylesProps={{ position: "absolute", bottom: "40px", left: "47px" }} />} />
          <PFOverlay
            image={<PFImage stylesProps={{
              width: "1155px",
              height: "534px",
              /**
               * how does this banner image have a hover effect, and how is the image inside the background work
               */
              //GOOGLE
              borderRadius: "20px"
            }} objectFit="cover" boxSize='100px' src="https://images.unsplash.com/photo-1490049350474-498de43bc885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2326&q=80" />} heading={<PFHeading stylesProps={{ position: "absolute", bottom: "68px", left: "47px" }} color="blanco" variant="h3" text="Stardeos - Un lugar justo"></PFHeading>}
            text={<PFParagraph variant="sub1" color="blanco" text="Rediseño de Stardeos.com" stylesProps={{ position: "absolute", bottom: "40px", left: "47px" }} />} />
          <PFOverlay
            image={<PFImage stylesProps={{
              width: "1155px",
              height: "534px",
              /**
               * how does this banner image have a hover effect, and how is the image inside the background work
               */
              //GOOGLE
              borderRadius: "20px"
            }} objectFit="cover" boxSize='100px' src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />} heading={<PFHeading stylesProps={{ position: "absolute", bottom: "68px", left: "47px" }} color="blanco" variant="h3" text="Stardeos - Un lugar justo"></PFHeading>}
            text={<PFParagraph variant="sub1" color="blanco" text="Rediseño de Stardeos.com" stylesProps={{ position: "absolute", bottom: "40px", left: "47px" }} />} />
          <PFButton variant="solid" size="size6" hover={{ bg: "linear-gradient(270deg, #47D16E 10.81%, #59EBFF 100%)" }}
          ><PFParagraph variant="boton" text="Rediseño de Stardeos.com" /></PFButton>
        </Box>
      </Box>
    </Box >


  );
}


import React from "react";
import { Box } from '@chakra-ui/react'
import PFAbility from "../PFAbilityCard/PFAbilityCard";
import PFHeading from "../PFHeading/PFHeading";
import PFParagraph from "../PFParagraph/PFParagraph";
import PFButton from "../PFButton/PFButton";
import PFImage from "../PFImage/PFImage";


type PFProjectsProps = {
  children?: any;
};

export const PFProjects = ({ children }: PFProjectsProps) => {
  return (
    <Box bg="fondo" d="flex" flexDirection="column" justifyContent="center" minW="100vw" m="0" p="0" pt="90px" alignItems="center" >
      <Box py="50px">
        <PFHeading variant="h3" text="Mis habilidades" color="primario" />
        <Box d="flex" flexDir={"column"} gap="50px" justifyContent="space-around" mt="50px" alignItems={"center"}>
          <PFImage stylesProps={{
            width: "1155px",
            height: "534px",
            /**
             * how does this banner image have a hover effect, and how is the image inside the background work
             */
            //GOOGLE
            borderRadius: "20px"
          }} objectFit="cover" boxSize='100px' src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" />
          <PFImage stylesProps={{
            width: "1155px",
            height: "534px",
            /**
             * how does this banner image have a hover effect, and how is the image inside the background work
             */
            //GOOGLE
            borderRadius: "20px"
          }} objectFit="cover" boxSize='100px' src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" />
          <PFImage stylesProps={{
            width: "1155px",
            height: "534px",
            /**
             * how does this banner image have a hover effect, and how is the image inside the background work
             */
            //GOOGLE
            borderRadius: "20px"
          }} objectFit="cover" boxSize='100px' src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" />
          <PFButton variant="solid" size="size6" hover={{ bg: "linear-gradient(270deg, #47D16E 10.81%, #59EBFF 100%)" }}
          ><PFParagraph variant="boton" text="Ver más en Behance desktop" /></PFButton>
        </Box>
      </Box>
    </Box >


  );
}

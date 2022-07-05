import React from "react";

import {
  Box,
  Stack,
} from '@chakra-ui/react';
import PFHeading from "../PFHeading/PFHeading";
import PFButton from "../PFButton/PFButton";
import PFParagraph from "../PFParagraph/PFParagraph";
import PFIconButton from "../PFIconButton/PFIconButton";
import { FiAirplay } from "react-icons/fi";
// type PFAbilityCardProps = {
//   children: Object;
// };

export default function PFAbilityCard() {
  return (
    <Box bg="fondo" d="flex" flexDirection="column" justifyContent="center" minW="100vw" m="0" p="0" pt={["64px",
      "80px"]} pb={["32px",
        "64px"]} alignItems="center" >
      <PFHeading variant="h3" text="Mis habilidades" color="primario" />
      <Stack direction={{ sm: 'column', md: 'column', lg: 'row' }} justifyContent="center" gap='24px' py="90px">
        <Box w="354px" h="308px" bg='rellenos' p="24px">
          <PFIconButton stylesProps={{
            background: "rellenos", color: "#59EBFF", marginBottom: "15px"

          }} hover={{ background: "rellenos", color: "blanco" }} icon={<FiAirplay />} ariaLabel="insta button" />
          <PFHeading color="blanco" variant="h3" text="Responsive design" stylesProps={{ marginBottom: "15px", textAlign: "left" }} />
          <PFParagraph color="blanco" variant="body1" text="Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de como implementarlos de manera efectiva en cualquier proyecto." stylesProps={{ textAlign: "left" }} />
        </Box>

        <Box w="354px" h="308px" bg='rellenos' p="24px">
          <PFIconButton stylesProps={{
            background: "rellenos", color: "primario", marginBottom: "15px"

          }} hover={{ background: "rellenos", color: "blanco" }} icon={<FiAirplay />} ariaLabel="insta button" />
          <PFHeading color="blanco" variant="h3" text="Responsive design" stylesProps={{ marginBottom: "15px", textAlign: "left" }} />
          <PFParagraph color="blanco" variant="body1" text="Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de como implementarlos de manera efectiva en cualquier proyecto." stylesProps={{ textAlign: "left" }} />
        </Box>
        <Box w="354px" h="308px" bg='rellenos' p="24px">
          <PFIconButton stylesProps={{
            background: "rellenos", color: "#59EBFF", marginBottom: "15px"

          }} hover={{ background: "rellenos", color: "blanco" }} icon={<FiAirplay />} ariaLabel="insta button" />
          <PFHeading color="blanco" variant="h3" text="Responsive design" stylesProps={{ marginBottom: "15px", textAlign: "left" }} />
          <PFParagraph color="blanco" variant="body1" text="Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de como implementarlos de manera efectiva en cualquier proyecto." stylesProps={{ textAlign: "left" }} />
        </Box>
      </Stack>
      <PFButton variant="solid" size="size7" hover={{ bg: "linear-gradient(270deg, #47D16E 10.81%, #59EBFF 100%)" }}
      ><PFParagraph variant="boton" text="See my skills" />  </PFButton>
    </Box >
  );
}

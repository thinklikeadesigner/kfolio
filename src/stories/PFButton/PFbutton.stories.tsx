import { Box } from "@chakra-ui/react";
import React from "react";
import PFButton from "../../foundation/PFButton/PFButton";
import PFParagraph from "../../foundation/PFParagraph/PFParagraph";

export default {
  title: "Foundation/PFButton",
  component: PFButton,
};

export const Default = () => {
  return (
    <PFButton variant="solid" size="size2" hover={{ bg: "linear-gradient(270deg, #47D16E 10.81%, #59EBFF 100%)" }}
    ><PFParagraph variant="boton" text="Enviar mobil" />  </PFButton>

  );
};

export const Boton9 = () => {
  return (
    <PFButton variant="solid" size="size5" hover={{ bg: "linear-gradient(270deg, #47D16E 10.81%, #59EBFF 100%)" }}
    ><PFParagraph variant="boton" text="Ver más en Behance mobil" /> </PFButton>
  );
};


export const Boton90 = () => {
  return (
    <PFButton variant="underline" size="size8" hover={{ borderBottom: "1px solid #47D16E" }}
    ><PFParagraph variant="boton" text="Inicio" /> </PFButton>
  );
};


export const Boton13 = () => {
  return (
    <PFButton variant="solid" size="size7" hover={{ bg: "linear-gradient(270deg, #47D16E 10.81%, #59EBFF 100%)" }}
    ><PFParagraph variant="boton" text="Ver proyectos" />  </PFButton>
  );
};

export const Boton7 = () => {
  return (
    <Box sx={{
      border: "1px solid white",
      width: "fit-content",
      borderRadius: "8px"
    }} _hover={{ border: "none" }}>
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
      ><PFParagraph variant="boton" text="Descargar CV" />  </PFButton></Box>
  );
};
export const Boton5 = () => {
  return (
    <Box sx={{
      border: "1px solid white",
      width: "fit-content",
      borderRadius: "8px"
    }} _hover={{ border: "none" }}>
      <PFButton variant="ghost" size="size3"
        hover={{
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
      ><PFParagraph variant="boton" text="Mas acerca de mi" />  </PFButton></Box>
  );
};

export const Boton3 = () => {
  return (
    <PFButton variant="solid" size="size1" hover={{ bg: "linear-gradient(270deg, #47D16E 10.81%, #59EBFF 100%)" }}
    ><PFParagraph variant="boton" text="Enviar desktop" /> </PFButton>
  );
};

export const Boton11 = () => {
  return (
    <PFButton variant="solid" size="size6" hover={{ bg: "linear-gradient(270deg, #47D16E 10.81%, #59EBFF 100%)" }}
    ><PFParagraph variant="boton" text="Ver más en Behance desktop" /></PFButton>
  );
};

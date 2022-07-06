
import React from "react";
import { Box } from '@chakra-ui/react'
// import PFAbility from "../PFAbilityCard/PFAbilityCard";
import PFHeading from "../PFHeading/PFHeading";
import PFParagraph from "../PFParagraph/PFParagraph";
import PFButton from "../PFButton/PFButton";
import PFImage from "../PFImage/PFImage";


type PFAboutProps = {
  children?: any;
};

export const PFAbout = ({ children }: PFAboutProps) => {
  return (
    <Box bg="fondo" d="flex" flexDirection="column" justifyContent="center" minW="100vw" m="0" px={["16px", "32px", "48px", "0px"]} py={["64px",
      "80px"]} alignItems="center" >
      <Box maxW="967px" d="flex" flexDir={{ sm: "column", md: "row", lg: "row" }} bg="rellenos" borderRadius="8px" p="24px" border="1.5px solid #3D3D3D" >
        <PFImage stylesProps={{
          width: "100%", height: "405.16px",
          borderRadius: "7.98349px",
          paddingRight: "32px"
        }} objectFit="cover" boxSize='100px' src="darkportrait.jpg" />;
        <Box d="flex" flexDir="column">


          <PFHeading stylesProps={{ textAlign: "left", marginBottom: "32px" }} color="primario" text="about me" variant="h2" />
          <PFParagraph stylesProps={{ textAlign: "left", marginBottom: "24px" }} variant="body1" text="          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia sapiente facilis obcaecati rerum eum placeat sequi ipsum. Eum tempora deserunt provident optio deleniti eligendi, fuga quis nam maiores quae?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia sapiente facilis obcaecati rerum eum placeat sequi ipsum. Eum tempora deserunt provident optio deleniti eligendi, fuga quis nam maiores quae?" color="blanco" />

          <Box sx={{
            boxShadow: "0 0 0 1px white",
            width: "fit-content",
            borderRadius: "8px"
          }} _hover={{ boxShadow: "none" }}>
            <PFButton variant="ghost" size="size3" stylesProps={{
              width: "fit-content",
            }}
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
            ><PFParagraph variant="boton" text="More about me" />  </PFButton>
          </Box>
        </Box>
      </Box>
    </Box>



  );
}

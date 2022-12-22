
import React from "react";
import { Box } from '@chakra-ui/react'
// import PFAbility from "../PFAbilityCard/PFAbilityCard";
import PFHeading from "../PFHeading/PFHeading";
import PFParagraph from "../PFParagraph/PFParagraph";
import PFButton from "../PFButton/PFButton";
import PFImage from "../PFImage/PFImage";
import { PFLink } from "../PFLink/PFLink";
// import { PFGallery } from "../PFGallery/PFGallery";


type PFAboutProps = {
  children?: any;
};

export const PFAbout = ({ children }: PFAboutProps) => {
  return (
    <Box bg="rellenos" d="flex" w="100vw" justifyContent={"center"} alignItems="center" py="80px">
      <Box d="flex" flexDirection="column" justifyContent="center" w="80vw" m="0" alignItems="center" >
        <Box maxW="967px" d="flex" flexDir={{ sm: "column", md: "row", lg: "row" }} borderRadius="8px" p="24px"
        // border="1.5px solid #3D3D3D"
        >
          <PFImage stylesProps={{
            width: "100%", height: "405.16px",
            // borderRadius: "20px",
            marginRight: ["0px", "0px", "0px", "0px", "32px"]
          }} objectFit="cover" boxSize='100px' src="showdrink.jpg" />;
          <Box d="flex" flexDir="column">


            <PFHeading stylesProps={{ textAlign: "left", marginBottom: "32px" }} color="primario" text="about me" variant="h2" />
            <PFParagraph stylesProps={{ textAlign: "left", marginBottom: "24px" }} variant="body1" text="          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia sapiente facilis obcaecati rerum eum placeat sequi ipsum. Eum tempora deserunt provident optio deleniti eligendi, fuga quis nam maiores quae?          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officia sapiente facilis obcaecati rerum eum placeat sequi ipsum. Eum tempora deserunt provident optio deleniti eligendi, fuga quis nam maiores quae?" color="blanco" />

            <Box sx={{
              boxShadow: "0 0 0 1px white",
              width: "fit-content",
              borderRadius: "8px"
            }} _hover={{ boxShadow: "none" }}>
        <PFLink href='https://www.tiktok.com/@katrogersmusic?lang=en' isExternal>

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
                    background: "linear-gradient(45deg,black, #af1f86) border-box",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, \n           linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                  }
                }}
                ><PFParagraph variant="boton" text="More about me" />  </PFButton>
                </PFLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>



  );
}

import * as React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme";
import PFNavBar from "./foundation/PFNavBar/PFNavBar";
import { PFLayout } from "./foundation/PFLayout/PFLayout";
import PFImage from "./foundation/PFImage/PFImage";
import { PFIntro } from "./foundation/PFIntro/PFIntro";
import { PFAbout } from "./foundation/PFAbout/PFAbout";
import PFAbilityCard from "./foundation/PFAbilityCard/PFAbilityCard";
import { PFProjects } from "./foundation/PFProjects/PFProjects";
import PFHeading from "./foundation/PFHeading/PFHeading";
import { PFOverlayHeading } from "./foundation/PFOverlay/PFOverlayHeading";
import { PFFooter } from "./foundation/PFFooter/PFFooter";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <PFLayout>
      <PFNavBar color="fondo" />
      <Box d="flex" justifyContent="center">
        <PFOverlayHeading
          heading={<PFHeading stylesProps={{
            fontWeight: 800,
            lineHeight: ["80px", "40px"],
            fontSize: ["0.001rem", "2rem", "4rem", "5rem", "7rem", "8rem"]
          }} color="blanco" variant="h3" text="KAT ROGERS"></PFHeading>}
          image={<PFImage stylesProps={{
            width: "100vw",
            /**
             * how does this banner image have a hover effect, and how is the image inside the background work
             */
            //GOOGLE
          }} height={["152px", "280px", "400px", "534px"]} objectFit="cover" src={"bannercopy.jpg"} />}
        />
      </Box>

      <PFIntro />
      <PFAbout />

      <PFAbilityCard />
      <PFProjects />
      <PFFooter></PFFooter>
    </PFLayout>
  </ChakraProvider >
);

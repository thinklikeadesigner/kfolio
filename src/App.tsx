import * as React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

// import { Provider } from "react-redux";
import customTheme from "./theme";
// import Home from "./feature/Home/Home";
// import { store } from "./store/store";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { PFBanner } from "./foundation/PFBanner/PFBanner";
import PFNavBar from "./foundation/NavBar/NavBar";
import { PFLayout } from "./foundation/PFLayout/PFLayout";
// import { BannerImage } from "./stories/PFImage/PFImage.stories";
import PFImage from "./foundation/PFImage/PFImage";
import { PFIntro } from "./foundation/PFIntro/PFIntro";
import { PFAbout } from "./foundation/PFAbout/PFAbout";
// import PFAbility from "./foundation/PFAbilityCard/PFAbilityCard";
import PFAbilityCard from "./foundation/PFAbilityCard/PFAbilityCard";
import { PFProjects } from "./foundation/PFProjects/PFProjects";

// import { routes } from "./routes/routes";
// import LayoutPage from "./feature/Layout/LayoutPage";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <PFLayout>
      <PFNavBar color="fondo" />
      <Box d="flex" justifyContent="center">
        <PFImage stylesProps={{
          width: "100vw",
          /**
           * how does this banner image have a hover effect, and how is the image inside the background work
           */
          //GOOGLE
        }} height={["152px", "280px", "400px", "534px"]} objectFit="cover" src={"bannercopy.png"} />;
      </Box>

      <PFIntro />
      <PFAbout />
      <PFAbilityCard />
      <PFProjects />

    </PFLayout>
  </ChakraProvider>
);

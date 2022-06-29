import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from "react-redux";
import customTheme from "./theme";
// import Home from "./feature/Home/Home";
// import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PFButton from "./foundation/PFButton/PFButton";
import PFHeading from "./foundation/PFHeading/PFHeading";
import { BannerImage } from "./stories/PFImage/PFImage.stories";
import PFImage from "./foundation/PFImage/PFImage";
import PFParagraph from "./foundation/PFParagraph/PFParagraph";
// import { routes } from "./routes/routes";
// import LayoutPage from "./feature/Layout/LayoutPage";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <div>
      <PFButton variant="solid" size="size2" hover={{ bg: "linear-gradient(270deg, #47D16E 10.81%, #59EBFF 100%)" }}
      ><PFParagraph variant="boton" text="Enviar mobil" />  </PFButton>
      <PFImage stylesProps={{
        width: "1155px",
        height: "534px",
        /**
         * how does this banner image have a hover effect, and how is the image inside the background work
         */
        //GOOGLE 
        borderRadius: "20px"
      }} objectFit="cover" boxSize='100px' src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" />

      <PFButton variant="ghost">hello</PFButton>
      <PFHeading variant="2" text="variant 2" ></PFHeading>
      <PFHeading variant="4" text="variant 4" />
    </div>
    {/* <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutPage>
                <Home />{" "}
              </LayoutPage>
            }
          />
          <Route path={routes.home} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider> */}
  </ChakraProvider>
);

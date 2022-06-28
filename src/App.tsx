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
// import { routes } from "./routes/routes";
// import LayoutPage from "./feature/Layout/LayoutPage";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <div>
      <BannerImage />
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

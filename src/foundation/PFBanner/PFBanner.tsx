import { Box, Button, Image } from "@chakra-ui/react";
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import React from "react";
import { bannerimage } from "../../assets/pics";



// type PFBannerProps = {

// };

const PFBanner = () => {
  return (
    <header>
      {/* <Box d="flex" alignItems="center" justifyContent="space-between" ml={6} mr={6}>
        <Box > <Image boxSize="90px" src={bannerimage} alt="bnrimg" /> </Box>
        <Box ><Button pr={3} colorScheme="gray.600" fontStyle={"sm"} variant="link">Log in</Button><Button /></Box>
      </Box> */}
    </header>
  );
}




export { PFBanner }

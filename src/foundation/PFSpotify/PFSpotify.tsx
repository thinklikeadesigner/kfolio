
import React from "react";
import { Box } from '@chakra-ui/react'
import PFHeading from "../PFHeading/PFHeading";
import PFParagraph from "../PFParagraph/PFParagraph";
import PFButton from "../PFButton/PFButton";
import PFImage from "../PFImage/PFImage";
import { FaSadCry, FaSpotify } from "react-icons/fa";
import Spotify from "../../spotify";


type PFSpotifyProps = {
  children?: any;
};

export const PFSpotify = ({ children }: PFSpotifyProps) => {
  return (
    // <Box d="flex" w="100vw" justifyContent={"center"} alignItems="center" py="80px">
    <Box marginTop={{ sm: "90px", md: "90px", lg: "0px", xl: "0px" }} bgGradient={"linear(to-br,  black, #af1f86)"} d="flex" flexDirection={"column"} borderRadius="20px" justifyContent={"center"} m="0" p={"48px"} alignItems="center" >
      <Box d="flex" flexDirection={{ sm: "column", md: "column", lg: "column" }} borderRadius="8px">
        <Box display={"flex"} justifyContent="center" alignItems="baseline">
          <PFImage src="spotify.png" stylesProps={{ height: "48px", marginBottom: "32px" }} />
        </Box>
        <Spotify link="https://open.spotify.com/track/7BKLCZ1jbUBVqRi2FVlTVw?si=745e2522d1bc496d" />
        <Box h="16px"></Box>
        <Spotify link="https://open.spotify.com/track/7BKLCZ1jbUBVqRi2FVlTVw?si=745e2522d1bc496d" />
        <Box h="16px"></Box>
        <Spotify link="https://open.spotify.com/track/7BKLCZ1jbUBVqRi2FVlTVw?si=745e2522d1bc496d" />
      </Box>
    </Box >
    // </Box >
  );
}

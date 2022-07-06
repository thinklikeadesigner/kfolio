
import React from "react";
import { Box } from '@chakra-ui/react'
import PFHeading from "../PFHeading/PFHeading";
import PFParagraph from "../PFParagraph/PFParagraph";
import PFButton from "../PFButton/PFButton";
import PFImage from "../PFImage/PFImage";
import { FaSadCry, FaSpotify } from "react-icons/fa";


type PFSpotifyProps = {
  children?: any;
};

export const PFSpotify = ({ children }: PFSpotifyProps) => {
  return (
    // <Box border="1px solid red" d="flex" w="100vw" justifyContent={"center"} alignItems="center" py="80px">
    <Box border="1px solid red" marginTop={{ sm: "90px", md: "90px", lg: "0px", xl: "0px" }} bgGradient={"linear(to-r, #06636c , #00292e)"} d="flex" flexDirection={"column"} borderRadius="20px" justifyContent={"center"} m="0" p={"48px"} alignItems="center" >
      <Box border="1px solid red" d="flex" flexDirection={{ sm: "column", md: "column", lg: "column" }} borderRadius="8px">
        <Box border="1px solid red" display={"flex"} justifyContent="center" alignItems="baseline">
          <PFImage src="spotify.png" stylesProps={{ height: "48px", marginBottom: "32px" }} />
        </Box>
        <Box border="1px solid red" h={{ sm: "250px", md: "380px" }} w="300px  ">

          <iframe src="https://open.spotify.com/embed/album/2aaWMtuGxw17AZpKhZGdXQ?utm_source=generator" width="100%" height="100%" frameBorder="2px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </Box>
      </Box>
    </Box >
    // </Box >
  );
}

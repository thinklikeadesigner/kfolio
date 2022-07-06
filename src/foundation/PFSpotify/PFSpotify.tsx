
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
    <Box bgGradient={"linear(to-r, #06636c , #00292e)"} d="flex" flexDirection={"column"} borderRadius="20px" justifyContent={"center"} m="0" p="48px" alignItems="center" >
      <Box d="flex" flexDirection={{ sm: "column", md: "column", lg: "column" }} borderRadius="8px" >
        <Box display={"flex"} justifyContent="center" alignItems="baseline">
          <PFImage src="spotify.png" stylesProps={{ height: "48px", marginBottom: "32px" }} />
        </Box>
        <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/album/2aaWMtuGxw17AZpKhZGdXQ?utm_source=generator" width="100%" height="380" frameBorder="2px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </Box>
    </Box >
  );
}

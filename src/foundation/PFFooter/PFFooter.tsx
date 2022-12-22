import React from "react";
import { Box } from '@chakra-ui/react'
import PFHeading from "../PFHeading/PFHeading";
// import PFParagraph from "../PFParagraph/PFParagraph";
import { PFLink } from "../PFLink/PFLink";
import {  FaSpotify } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";



// type PFFooterProps = {

// };

export const PFFooter = (
  // { }: PFFooterProps
) => {
  return (
    <footer>
      <Box h="301px" px="64px" pt="64px" pb="32px" display={"flex"} flexDir="column" justifyContent="center" alignItems={"start"}>
        <Box display="flex" maxW={"790px"} w="100%" justifyContent="space-between">
          <PFHeading variant={"h3"} text="Kat Rogers Music" color="blanco" />
          <Box display={"flex"} flexDir="column">

          </Box>
          {/* <PFParagraph variant={"body1"} text="Yuxin" color="blanco" />
            <PFParagraph variant={"body1"} text="Yuxin" color="blanco" />
            <PFParagraph variant={"body1"} text="Yuxin" color="blanco" /> */}
        </Box>

        <Box display={"flex"} flexDir="column">
          {/* <PFParagraph variant={"body1"} text="Yuxin" color="blanco" />
            <PFParagraph variant={"body1"} text="Yuxin" color="blanco" />
          <PFParagraph variant={"body1"} text="Yuxin" color="blanco" /> */}
        </Box>
        <Box display={"flex"} justifyContent="start" mt="64px" >
          <Box h="20px" >
          </Box>

          <PFLink href='#spotify'><FaSpotify size="30px" style={{ marginRight: "20px" }} /> </PFLink>
          <Box h="20px" >
          </Box>
          {/* <PFLink href='https://www.instagram.com/katrogersmusic/' isExternal><FaInstagram size="30px" style={{ marginRight: "20px" }} /></PFLink> */}
          <Box h="20px" >
          </Box>
          <PFLink href='https://www.tiktok.com/@katrogersmusic?lang=en' isExternal><SiTiktok size="30px" style={{ marginRight: "20px" }} /></PFLink>
          {/* <PFParagraph variant={"body1"} text="Yuxin" color="blanco" /> */}
        </Box>

      </Box>
      <Box display={"flex"} justifyContent="start" mt="64px" >
        {/* <PFParagraph variant={"body1"} text="Yuxin" color="blanco" /> */}
      </Box>

    </footer >
  );
}

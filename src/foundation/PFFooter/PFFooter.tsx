import React from "react";
import { Box } from '@chakra-ui/react'
import PFHeading from "../PFHeading/PFHeading";
import PFParagraph from "../PFParagraph/PFParagraph";



type PFFooterProps = {

};

export const PFFooter = ({ }: PFFooterProps) => {
  return (
    <footer>
      <Box h="301px" px="64px" pt="64px" pb="32px" display={"flex"} flexDir="column" justifyContent="center" alignItems={"start"}>
        <Box display="flex" maxW={"790px"} w="100%" justifyContent="space-between">
          <PFHeading variant={"h3"} text="Yuxin" color="blanco" />
          <Box display={"flex"} flexDir="column">
            <PFParagraph variant={"body1"} text="Yuxin" color="blanco" />
            <PFParagraph variant={"body1"} text="Yuxin" color="blanco" />
            <PFParagraph variant={"body1"} text="Yuxin" color="blanco" />
          </Box>
          <Box display={"flex"} flexDir="column">
            <PFParagraph variant={"body1"} text="Yuxin" color="blanco" />
            <PFParagraph variant={"body1"} text="Yuxin" color="blanco" />
            <PFParagraph variant={"body1"} text="Yuxin" color="blanco" />
          </Box>
          <Box display={"flex"} flexDir="column">
            <PFParagraph variant={"body1"} text="Yuxin" color="blanco" />
            <PFParagraph variant={"body1"} text="Yuxin" color="blanco" />
            <PFParagraph variant={"body1"} text="Yuxin" color="blanco" />
          </Box>
        </Box>
        <Box w="1156px" display={"flex"} justifyContent="start" mt="64px" border={"1px solid red"}>
          <PFParagraph variant={"body1"} text="Yuxin" color="blanco" />
        </Box>
      </Box >

    </footer >
  );
}

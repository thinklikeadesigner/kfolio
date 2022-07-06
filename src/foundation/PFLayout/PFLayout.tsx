
import React from "react";
import { Box } from '@chakra-ui/react'


type PFLayoutProps = {
  children?: any;
};

export const PFLayout = ({ children }: PFLayoutProps) => {
  return (
    <Box bg="fondo" d="flex" flexDirection="column" overflowY={"hidden"} minH="100vh" m="0px" px={["0px"]} >{children}</Box>
  );
}


import React from "react";
import { Box, Link } from '@chakra-ui/react'


type PFLayoutProps = {
    children?: any;
};

export const PFLayout = ({ children }: PFLayoutProps) => {
    return (
        <Box bg="fondo" d="flex" flexDirection="column" minH="100vh" m="0px" p="0px" >{children}</Box>
    );
}
import React from "react"

import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import { FaSpotify } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import { PFLink } from "../PFLink/PFLink"
import PFHeading from "../PFHeading/PFHeading"

type PFDrawerProps = {
  drawerSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full',


}

export default function PFDrawer({ drawerSize }: PFDrawerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = ({ newSize }: any) => {
    onOpen()
  }


  return (
    <>

      <Button position="relative"
        backgroundColor={"fondo"}
        onClick={() => handleClick(drawerSize)}
        key={drawerSize}
        width="50px" height="40px"
      >      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M13 18H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg></Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={drawerSize} >
        <DrawerOverlay />
        <DrawerContent backgroundColor="black">
          <Box bg={"black"} py={{ xs: "18px", sm: "18px", md: "36px" }} px={{ xs: "12px", sm: "16px", md: "32px", lg: "64px", xl: "104px" }}>
            <Box display={{ sm: "flex", md: "flex", lg: "none" }} >
              <Box w={"100%"} display="flex" justifyContent={"space-between"} alignItems="center">
                <PFHeading variant="h4" color="blanco" text="Kat Rogers Music" />

                <DrawerCloseButton position={"inherit"} alignContent="center" color={"white"} width="50px" height="40px" />

              </Box>
            </Box>

          </Box >
          <Box mt="40px" p="24px" display={"flex"} flexDir="column" justifyContent={"start"} alignItems="start">

            <PFHeading variant="h2" text="Home" color="white" />
            <PFHeading variant="h2" text="DJ" color="white" />
            <PFHeading variant="h2" text="Camera Work" color="white" />
            <PFHeading variant="h2" text="Gallery" color="white" />
          </Box>
          <Divider></Divider>
          <DrawerBody>
            <Box mt="40px" d="flex" gap="40px" justifyContent={"end"}>
              {/* <PFLink href='https://www.instagram.com/katrogersmusic/' isExternal><FaInstagram size="30px" /></PFLink> */}
              <PFLink href='#spotify'><FaSpotify size="30px" /> </PFLink>
              {/* <PFLink  href='#' isExternal><FaYoutube size="30px" /></PFLink> */}
              <PFLink href='https://www.tiktok.com/@katrogersmusic?lang=en' isExternal><SiTiktok size="30px" /></PFLink>
            </Box>
            <Box >
              {/* <PFButton variant="solid" size="size5" hover={{ bg: "linear-gradient(270deg, #1bd760 10.81%, #59EBFF 100%)" }}
              ><PFParagraph variant="boton" text="Check out my Music!" /> </PFButton> */}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

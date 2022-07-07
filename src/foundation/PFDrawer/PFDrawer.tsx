import React from "react"

import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, useDisclosure } from "@chakra-ui/react"

type PFDrawerProps = {
  drawerSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full',


}

export default function PFDrawer({ drawerSize }: PFDrawerProps) {
  const [size, setSize] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = ({ newSize }: any) => {
    setSize(newSize)
    onOpen()
  }


  return (
    <>

      <Button
        backgroundColor={"fondo"}
        onClick={() => handleClick(drawerSize)}
        key={drawerSize}
        m={0} p={0}
      >      <svg width="50" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M13 18H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg></Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={drawerSize}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`${drawerSize} drawer contents`}</DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

import { Box } from "@chakra-ui/react";
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import React from "react";
import PFHeading from "../PFHeading/PFHeading";

export const PFGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    // height: '150px',
  }



  return (
    <Box bg="fondo" d="flex" w="100vw" justifyContent={"center"} flexDir="column" alignItems="center" py="80px">
      <PFHeading stylesProps={{}} color="primario" text="Gallery" variant="h2" />
      <Gallery >
        <Box gridGap={{ xs: 4, sm: 8, md: 8, lg: 8 }} px="160px" py="64px"
          // gridTemplateColumns={{ xs: "repeat(1, 1fr)", sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)" }}
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          style={{
            display: 'grid',
            gridTemplateRows: '114px, 114px',
          }}>
          <Item
            alt="asdfa"


            id='guitar'
            original="guitar.jpg"
            thumbnail="guitar.jpg"
            width="819"
            height="824"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="guitar.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"

            id='housepic'
            original="housepic.jpg"
            thumbnail="housepic.jpg"
            width="960"
            height="1280"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="housepic.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"


            id='sitdrink'
            original="sitdrink.jpg"
            thumbnail="sitdrink.jpg"
            width="933"
            height="1024"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="sitdrink.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"

            id='live'
            original="live.jpg"
            thumbnail="live.jpg"
            width="491"
            height="1024"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="live.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"
            id='carwink'
            original="carwink.jpg"
            thumbnail="carwink.jpg"
            width="1200"
            height="1600"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="carwink.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"
            // 935 × 1024
            id='showdrink'
            original="showdrink.jpg"
            thumbnail="showdrink.jpg"
            width="935"
            height="1024"

          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="showdrink.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"

            id='djlooking'
            original="djlooking.jpg"
            thumbnail="djlooking.jpg"
            width="960"
            height="1280"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="djlooking.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"

            id='djnotlooking'
            original="djnotlooking.jpg"
            thumbnail="djnotlooking.jpg"
            width="1200"
            height="1600"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="djnotlooking.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"

            id='guitar'
            original="guitar.jpg"
            thumbnail="guitar.jpg"
            width="819"
            height="824"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="guitar.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"

            id='housepic'
            original="housepic.jpg"
            thumbnail="housepic.jpg"
            width="960"
            height="1280"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="housepic.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"

            id='sitdrink'
            original="sitdrink.jpg"
            thumbnail="sitdrink.jpg"
            width="933"
            height="1024"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="sitdrink.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"

            id='live'
            original="live.jpg"
            thumbnail="live.jpg"
            width="491"
            height="1024"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="live.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"

            id='guitar'
            original="guitar.jpg"
            thumbnail="guitar.jpg"
            width="819"
            height="824"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="guitar.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"

            id='housepic'
            original="housepic.jpg"
            thumbnail="housepic.jpg"
            width="960"
            height="1280"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="housepic.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"

            id='sitdrink'
            original="sitdrink.jpg"
            thumbnail="sitdrink.jpg"
            width="933"
            height="1024"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="sitdrink.jpg" />
            )}
          </Item>
          <Item
            alt="asdfa"
            id='live'
            original="live.jpg"
            thumbnail="live.jpg"
            width="491"
            height="1024"
          >
            {({ ref, open, smallItemsStyles }: any) => (
              <img style={smallItemsStyles} ref={ref} onClick={open} src="live.jpg" />
            )}
          </Item>
        </Box>
      </Gallery >
    </Box >
  )

}

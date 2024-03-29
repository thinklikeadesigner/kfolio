import { Box } from "@chakra-ui/react";
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import React from "react";
import PFHeading from "../PFHeading/PFHeading";

export const PFGallery = () => {




  return (
    <Box bg="fondo" d="flex" w="100vw" justifyContent={"center"} flexDir="column" alignItems="center" py="80px">
      <PFHeading stylesProps={{}} color="primario" text="Gallery" variant="h2" />
      <Gallery >
        <Box gridGap={{ xs: 4, sm: 8, md: 8, lg: 8 }} px={{ xs: "16px", sm: "24px", md: "80px", lg: "160px" }} py="64px"
          // gridTemplateColumns={{ xs: "repeat(1, 1fr)", sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)" }}
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          style={{
            display: 'grid',
            gridTemplateRows: '114px, 114px',
          }}>
          <Item



            id='guitar'
            original="guitar.jpg"
            thumbnail="guitar.jpg"
            width="819"
            height="824"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="guitar.jpg" />
            )}
          </Item>
          <Item


            id='housepic'
            original="housepic.jpg"
            thumbnail="housepic.jpg"
            width="960"
            height="1280"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="housepic.jpg" />
            )}
          </Item>
          <Item



            id='sitdrink'
            original="sitdrink.jpg"
            thumbnail="sitdrink.jpg"
            width="933"
            height="1024"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="sitdrink.jpg" />
            )}
          </Item>
          <Item


            id='live'
            original="live.jpg"
            thumbnail="live.jpg"
            width="491"
            height="1024"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="live.jpg" />
            )}
          </Item>
          <Item

            id='carwink'
            original="carwink.jpg"
            thumbnail="carwink.jpg"
            width="1200"
            height="1600"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="carwink.jpg" />
            )}
          </Item>
          <Item

            // 935 × 1024
            id='showdrink'
            original="showdrink.jpg"
            thumbnail="showdrink.jpg"
            width="935"
            height="1024"

          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="showdrink.jpg" />
            )}
          </Item>
          <Item


            id='djlooking'
            original="djlooking.jpg"
            thumbnail="djlooking.jpg"
            width="960"
            height="1280"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="djlooking.jpg" />
            )}
          </Item>
          <Item


            id='djnotlooking'
            original="djnotlooking.jpg"
            thumbnail="djnotlooking.jpg"
            width="1200"
            height="1600"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="djnotlooking.jpg" />
            )}
          </Item>
          <Item


            id='guitar'
            original="guitar.jpg"
            thumbnail="guitar.jpg"
            width="819"
            height="824"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="guitar.jpg" />
            )}
          </Item>
          <Item


            id='housepic'
            original="housepic.jpg"
            thumbnail="housepic.jpg"
            width="960"
            height="1280"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="housepic.jpg" />
            )}
          </Item>
          <Item


            id='sitdrink'
            original="sitdrink.jpg"
            thumbnail="sitdrink.jpg"
            width="933"
            height="1024"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="sitdrink.jpg" />
            )}
          </Item>
          <Item


            id='live'
            original="live.jpg"
            thumbnail="live.jpg"
            width="491"
            height="1024"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="live.jpg" />
            )}
          </Item>
          <Item


            id='guitar'
            original="guitar.jpg"
            thumbnail="guitar.jpg"
            width="819"
            height="824"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="guitar.jpg" />
            )}
          </Item>
          <Item


            id='housepic'
            original="housepic.jpg"
            thumbnail="housepic.jpg"
            width="960"
            height="1280"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="housepic.jpg" />
            )}
          </Item>
          <Item


            id='sitdrink'
            original="sitdrink.jpg"
            thumbnail="sitdrink.jpg"
            width="933"
            height="1024"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="sitdrink.jpg" />
            )}
          </Item>
          <Item

            id='live'
            original="live.jpg"
            thumbnail="live.jpg"
            width="491"
            height="1024"
          >
            {({ ref, open, }: any) => (
              <img alt="asdfa" ref={ref} onClick={open} src="live.jpg" />
            )}
          </Item>
        </Box>
      </Gallery >
    </Box >
  )

}

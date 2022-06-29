import { extendTheme } from "@chakra-ui/react";
import "@fontsource/dm-sans"

const customTheme = extendTheme({
  colors: {
    primario: "#47D16E",
    acento: "#59EBFE",
    blanco: "#FFFFFF",
    rellenos: "#1F1F21",
    bordes: "#3D3D3D",
    fondo: "#171718",
    grad1: "47D16E",
    grad2: "59EBFF",
    gris: "#A0A0A1",
    purple: "#9000ff",
    red: "#c2273a",
    mustard: "#efb728",
    bluegradleft: "#343f98",
    bluegradright: "#4f98d1",
    green: "#71e985"
    //GOOGLE
/**
 *        header background gradient: {
          background: "linear-gradient(270deg, #47D16E 10.81%, #59EBFF 100%)",
          opacity: 0.5,
          filter: "blur(600px)"
        },
 */
  },
  fonts: {
    heading: "DM Sans",
    body: "DM Sans",
    fonstStyle: "normal"
  },
  components: {
    Button: {
      sizes: {
        size1: {
          padding: "16px 8px",
          gap: "10px",
          width: "399px"
        },
        size2: {
          padding: "16px 8px",
          gap: "10px",
          width: "286px"
        },
        size3: {
          padding: "16px 20px",
          gap: "10px",
          width: "198px"
        },
        size4: {
          padding: "16px 20px",
          gap: "8px",
          width: "172px"
        },
        size5: {
          padding: "16px 20px",
          gap: "10px",
          width: "218px"
        },
        size6: {
          padding: "16px 20px",
          gap: "10px",
          width: "328px"
        },
        size7: {
          padding: "16px 20px",
          gap: "10px",
          width: "169px"
        }
      },
      baseStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "48px",
        borderRadius: "8px",
      },
      variants: {
        solid: {
          background: "#47D16E",
          transition: "transform 800ms ease-in-out",
        },
        ghost: {
          boxSizing: "border-box",
        },
      },
    },
    Image: {
      sx: {
        profile: {
          width: "326.33px",
          height: "405.16px",
          borderRadius: "7.98349px"
        },
        // ghost: {
        //   color: "secondary",
        // },
        // navBar: {
        //   color: "darkColor",
        //   fontSize: "18px",
        //   lineHeight: "29px",
        // },
      },
    },
    Heading: {
      variants: {
        "h1": {
          fontWeight: 700,
          fontSize: "60px",
          lineHeight: "71px",
          letterSpacing: "-0.5px"
        },
        "h2": {
          fontWeight: 500,
          fontSize: "48px",
          lineHeight: "57px"
        },
        "h3": {
          fontWeight: 500,
          fontSize: "34px",
          lineHeight: "40px",
          letterSpacing: "0.25px"
        },
        "h4": {
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "32px"
        },
        "h5": {
          fontWeight: 500,
          fontSize: "20px",
          lineHeight: "24px",
          letterSpacing: "0.15px"
        },
      },
    },
    Text: {
      variants: {
        "sub1": {
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "20px",
          letterSpacing: "0.15px"
        },
        "sub2": {
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "24px",
          letterSpacing: "0.1px"
        },
        "body1": {
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "28px",
          letterSpacing: "0.44px"
        },
        "body2": {
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0.25px"
        },
        "boton": {
          fontFamily: "DM Sans",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "16px",
          color: "blanco"
        },
        "caption": {
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "0.4px"
        },
        "overline": {
          fontWeight: 400,
          fontSize: "10px",
          lineHeight: "16px",
          letterSpacing: "1.5px",
          textTransform: "uppercase"
        },
        "badge": {
          fontWeight: 400,
          fontSize: "8px",
          lineHeight: "10px",
          display: "flex",
          alignItems: "center",
        },
      },
    },
  },
});

export default customTheme;

import PFImage from "../../foundation/PFImage/PFImage";
import React from "react";

export default {
  title: "Foundation/PFImage",
  component: PFImage,
};

export const Default = () => {
  return <PFImage stylesProps={{
    width: "326.33px",
    borderRadius: "7.98349px"
  }} objectFit="cover" boxSize='100px' src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />;
};




export const BannerImage = () => {
  return <PFImage stylesProps={{
    width: "1155px",
    height: "534px",
    /**
     * how does this banner image have a hover effect, and how is the image inside the background work
     */
    //GOOGLE
    borderRadius: "20px"
  }} objectFit="cover" boxSize='100px' src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" />;
};

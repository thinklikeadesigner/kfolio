import React from "react";

import { PFLink } from "../../foundation/PFLink/PFLink";
// import PFParagraph from "../../foundation/PFParagraph/PFParagraph";

export default {
  title: "Foundation/PFLink",
  component: PFLink,
};

export const Default = () => {
  return (
    <PFLink hover={{ borderBottom: "3px solid #47D16E" }} size="size1" href='https://chakra-ui.com' isExternal >Inicio</PFLink>
  );
};

export const GreenLink = () => {
  return (
    <PFLink hover={{ borderBottom: "none" }} variant="solid" size="size1" href='https://chakra-ui.com' isExternal >Inicio</PFLink>
  );
};

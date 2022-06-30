import { Image } from "@chakra-ui/react";
import React from "react";

type PFImageProps = {
  src: string,
  stylesProps?: Object;
  boxSize?: string;
  objectFit?: any;
  className?: any;
  opacity?: any;
  transition?: any;
  transform?: any;
  after?: any;

};
export default function PFImage({ src, stylesProps, boxSize, objectFit, className, opacity, transition, transform, after }: PFImageProps) {
  return (
    <Image
      sx={stylesProps}
      _after={after}
      alt="Balram Rathore"
      src={src}
      className={className}
      boxSize={boxSize}
      objectFit={objectFit}
      opacity={opacity}
      transition={transition}
      transform={transform}
    />
  );
}

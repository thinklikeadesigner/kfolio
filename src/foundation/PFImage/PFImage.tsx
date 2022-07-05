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
  height?: any;
};
export default function PFImage({ src, stylesProps, height, boxSize, objectFit, className, opacity, transition, transform, after }: PFImageProps) {
  return (
    <Image
      sx={stylesProps}
      _after={after}
      alt="Balram Rathore"
      src={src}
      h={height}
      className={className}
      boxSize={boxSize}
      objectFit={objectFit}
      opacity={opacity}
      transition={transition}
      transform={transform}
    />
  );
}

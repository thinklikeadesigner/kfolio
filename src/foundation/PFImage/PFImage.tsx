import { Image } from "@chakra-ui/react";
import React from "react";

type PFImageProps = {
    src: string,
    stylesProps?: Object;
    boxSize?: string;
    objectFit?: any;

};
export default function PFImage({ src, stylesProps, boxSize, objectFit }: PFImageProps) {
    return (
        <Image
            sx={stylesProps}
            alt="Balram Rathore"
            src={src}
            boxSize={boxSize}
            objectFit={objectFit}
        />
    );
}

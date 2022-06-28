import React from "react";
import PFHeading from "../../foundation/PFHeading/PFHeading";

export default {
    title: "Foundation/PFHeading",
    component: PFHeading,
};

export const Default = () => {
    return <PFHeading variant="h1" text="variant h1" />;
};
export const H2 = () => {
    return <PFHeading variant="h2" text="variant h2" />;
};

export const H3 = () => {
    return <PFHeading variant="h3" text="variant h3" />;
};

export const H4 = () => {
    return <PFHeading variant="h4" text="variant h4" />;
};

export const H5 = () => {
    return <PFHeading variant="h5" text="variant h5" />;
};

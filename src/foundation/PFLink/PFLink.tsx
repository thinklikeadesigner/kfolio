import React from "react";
import { Link } from '@chakra-ui/react'


type PFLinkProps = {
  children?: any;
  variant?: any;
  size?: any;
  hover?: any;
  isExternal?: boolean;
  href?: string;
};

export const PFLink = ({ children, variant, size, hover, isExternal, href }: PFLinkProps) => {
  return (
    <header>
      <Link isExternal={isExternal} href={href}>
        {children}
      </Link>
    </header>
  );
}

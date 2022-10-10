
import Link from "@mui/material/Link";

import * as React from "react";
export interface IDefaultLinkProps {
  children: React.ReactNode;
  // varaint: "navLink" | "exploreCardButton" | "libraryCardButton";
  clickHandler: () => void;
  to?: string;
}
export default function DefaultLink(props: IDefaultLinkProps) {
  const { children, ...rest } = props;
  return (
    <Link {...rest} underline="hover" style={{textDecoration:'none'}} variant="body1" color="#033148">
      {children}
    </Link>
  );
}

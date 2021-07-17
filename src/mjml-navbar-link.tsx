import React from "react";
import { HrefProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlNavbarLink = ({
  children,
  ...rest
}: React.PropsWithChildren<MjmlNavbarLinkProps & HrefProps & PaddingProps>) => {
  return React.createElement("mj-navbar-link", handleMjmlProps(rest), children);
};

export interface MjmlNavbarLinkProps {
  color?: React.CSSProperties["color"] | undefined;
  fontFamily?: string | undefined;
  fontSize?: string | number | undefined;
  fontStyle?: string | undefined;
  fontWeight?: number | undefined;
  lineHeight?: string | number | undefined;
  textDecoration?: string | undefined;
  textTransform?: string | undefined;
}

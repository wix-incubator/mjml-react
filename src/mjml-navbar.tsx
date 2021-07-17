import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlNavbar = ({
  children,
  ...rest
}: React.PropsWithChildren<MjmlNavbarProps>) => {
  return React.createElement("mj-navbar", handleMjmlProps(rest), children);
};

export interface MjmlNavbarProps {
  baseUrl?: string | undefined;
  hamburger?: "hamburger" | undefined;
  align?: string | undefined;
  icoOpen?: string | undefined;
  icoClose?: string | undefined;
  icoPadding?: string | undefined;
  icoPaddingTop?: string | undefined;
  icoPaddingRight?: string | undefined;
  icoPaddingBottom?: string | undefined;
  icoPaddingLeft?: string | undefined;
  icoAlign?: string | undefined;
  icoColor?: React.CSSProperties["color"] | undefined;
  icoFontSize?: string | undefined;
  icoTextTransform?: string | undefined;
  icoTextDecoration?: string | undefined;
  icoLineHeight?: string | undefined;
}

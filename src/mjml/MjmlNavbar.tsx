/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlNavbarProps {
  align?: "left" | "center" | "right";
  baseUrl?: string;
  hamburger?: string;
  icoAlign?: "left" | "center" | "right";
  icoOpen?: string;
  icoClose?: string;
  icoColor?: string;
  icoFontSize?: string | number;
  icoFontFamily?: string;
  icoTextTransform?: string;
  icoPadding?: string | number;
  icoPaddingLeft?: string | number;
  icoPaddingTop?: string | number;
  icoPaddingRight?: string | number;
  icoPaddingBottom?: string | number;
  padding?: string | number;
  paddingLeft?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  icoTextDecoration?: string;
  icoLineHeight?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlNavbar({
  children,
  ...props
}: IMjmlNavbarProps): JSX.Element {
  return React.createElement(
    "mj-navbar",
    convertPropsToMjmlAttributes(props),
    children
  );
}

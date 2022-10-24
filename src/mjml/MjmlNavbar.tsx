/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import {
  convertPropsToMjmlAttributes,
  Matrix,
  Pixel,
  Percentage,
} from "../utils";

export interface IMjmlNavbarProps {
  align?: "left" | "center" | "right";
  baseUrl?: string;
  hamburger?: string;
  icoAlign?: "left" | "center" | "right";
  icoOpen?: string;
  icoClose?: string;
  icoColor?: string;
  icoFontSize?: Pixel | Percentage;
  icoFontFamily?: string;
  icoTextTransform?: string;
  icoPadding?: Matrix<Pixel | Percentage>;
  icoPaddingLeft?: Pixel | Percentage;
  icoPaddingTop?: Pixel | Percentage;
  icoPaddingRight?: Pixel | Percentage;
  icoPaddingBottom?: Pixel | Percentage;
  padding?: Matrix<Pixel | Percentage>;
  paddingLeft?: Pixel | Percentage;
  paddingTop?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  paddingBottom?: Pixel | Percentage;
  icoTextDecoration?: string;
  icoLineHeight?: Pixel | Percentage;
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

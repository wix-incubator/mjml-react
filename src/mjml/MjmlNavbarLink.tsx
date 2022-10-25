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
  Ephemeral,
} from "../utils";

export interface IMjmlNavbarLinkProps {
  color?: React.CSSProperties["color"];
  fontFamily?: string;
  fontSize?: Pixel;
  fontStyle?: string;
  fontWeight?: string;
  href?: string;
  name?: string;
  target?: string;
  rel?: string;
  letterSpacing?: Pixel | Ephemeral;
  lineHeight?: Pixel | Percentage;
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  paddingTop?: Pixel | Percentage;
  padding?: Matrix<Pixel | Percentage>;
  textDecoration?: React.CSSProperties["textDecoration"];
  textTransform?: React.CSSProperties["textTransform"];
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlNavbarLink({
  children,
  ...props
}: IMjmlNavbarLinkProps): JSX.Element {
  return React.createElement(
    "mj-navbar-link",
    convertPropsToMjmlAttributes(props),
    children
  );
}

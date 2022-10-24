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

export interface IMjmlButtonProps {
  align?: "left" | "center" | "right";
  backgroundColor?: React.CSSProperties["backgroundColor"];
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: React.CSSProperties["borderRadius"];
  borderRight?: string;
  borderTop?: string;
  border?: React.CSSProperties["border"];
  color?: React.CSSProperties["color"];
  containerBackgroundColor?: string;
  fontFamily?: string;
  fontSize?: Pixel;
  fontStyle?: string;
  fontWeight?: string;
  height?: Pixel | Percentage;
  href?: string;
  name?: string;
  title?: string;
  innerPadding?: Matrix<Pixel | Percentage>;
  letterSpacing?: Pixel | Ephemeral;
  lineHeight?: Pixel | Percentage;
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  paddingTop?: Pixel | Percentage;
  padding?: Matrix<Pixel | Percentage>;
  rel?: string;
  target?: string;
  textDecoration?: React.CSSProperties["textDecoration"];
  textTransform?: React.CSSProperties["textTransform"];
  verticalAlign?: React.CSSProperties["verticalAlign"];
  textAlign?: React.CSSProperties["textAlign"];
  width?: Pixel | Percentage;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlButton({
  children,
  ...props
}: IMjmlButtonProps): JSX.Element {
  return React.createElement(
    "mj-button",
    convertPropsToMjmlAttributes(props),
    children
  );
}

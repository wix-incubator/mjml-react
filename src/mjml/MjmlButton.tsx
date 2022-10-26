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
  /** MJML default value: center */
  align?: "left" | "center" | "right";
  backgroundColor?: React.CSSProperties["backgroundColor"];
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: React.CSSProperties["borderRadius"];
  borderRight?: string;
  borderTop?: string;
  /** MJML default value: none */
  border?: React.CSSProperties["border"];
  /** MJML default value: #ffffff */
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
  /** MJML default value: 10px 25px */
  padding?: Matrix<Pixel | Percentage>;
  rel?: string;
  /** MJML default value: _blank */
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
  dangerouslySetInnerHTML?: { __html: string };
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

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

export interface IMjmlSocialProps {
  /** MJML default value: center */
  align?: "left" | "right" | "center";
  borderRadius?: React.CSSProperties["borderRadius"];
  containerBackgroundColor?: string;
  /** MJML default value: #333333 */
  color?: React.CSSProperties["color"];
  fontFamily?: string;
  fontSize?: Pixel;
  fontStyle?: string;
  fontWeight?: string;
  iconSize?: Pixel | Percentage;
  iconHeight?: Pixel | Percentage;
  iconPadding?: Matrix<Pixel | Percentage>;
  innerPadding?: Matrix<Pixel | Percentage>;
  lineHeight?: Pixel | Percentage;
  /** MJML default value: horizontal */
  mode?: "horizontal" | "vertical";
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  paddingTop?: Pixel | Percentage;
  /** MJML default value: 10px 25px */
  padding?: Matrix<Pixel | Percentage>;
  tableLayout?: "auto" | "fixed";
  textPadding?: Matrix<Pixel | Percentage>;
  textDecoration?: React.CSSProperties["textDecoration"];
  verticalAlign?: React.CSSProperties["verticalAlign"];
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlSocial({
  children,
  ...props
}: IMjmlSocialProps): JSX.Element {
  return React.createElement(
    "mj-social",
    convertPropsToMjmlAttributes(props),
    children
  );
}

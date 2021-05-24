/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlButtonProps {
  align?: string;
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
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: React.CSSProperties["fontWeight"];
  height?: string | number;
  href?: string;
  name?: string;
  innerPadding?: string | number;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  padding?: string | number;
  rel?: string;
  target?: string;
  textDecoration?: React.CSSProperties["textDecoration"];
  textTransform?: React.CSSProperties["textTransform"];
  verticalAlign?: React.CSSProperties["verticalAlign"];
  textAlign?: React.CSSProperties["textAlign"];
  width?: string | number;
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

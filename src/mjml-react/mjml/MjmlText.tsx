/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlTextProps {
  align?: string;
  backgroundColor?: React.CSSProperties["backgroundColor"];
  color?: React.CSSProperties["color"];
  containerBackgroundColor?: string;
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: React.CSSProperties["fontWeight"];
  height?: string | number;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  padding?: string | number;
  textDecoration?: React.CSSProperties["textDecoration"];
  textTransform?: React.CSSProperties["textTransform"];
  verticalAlign?: React.CSSProperties["verticalAlign"];
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlText({ children, ...props }: IMjmlTextProps): JSX.Element {
  return React.createElement(
    "mj-text",
    convertPropsToMjmlAttributes(props),
    children
  );
}

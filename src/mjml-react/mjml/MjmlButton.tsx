/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

interface IProps {
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
  fontWeight?: string;
  height?: string | number;
  href?: string;
  name?: string;
  title?: string;
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
  textDecoration?: string;
  textTransform?: string;
  verticalAlign?: React.CSSProperties["verticalAlign"];
  textAlign?: React.CSSProperties["textAlign"];
  width?: string | number;
  className?: string;
  cssClass?: string;
}

export const MjmlButton: React.FC<IProps> = ({ children, ...props }) => {
  return React.createElement(
    "mj-button",
    convertPropsToMjmlAttributes(props),
    children
  );
};

/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

interface IProps {
  align?: string;
  border?: React.CSSProperties["border"];
  cellpadding?: string;
  cellspacing?: string;
  containerBackgroundColor?: string;
  color?: React.CSSProperties["color"];
  fontFamily?: string;
  fontSize?: string | number;
  fontWeight?: string;
  lineHeight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  padding?: string | number;
  tableLayout?: string;
  verticalAlign?: React.CSSProperties["verticalAlign"];
  width?: string | number;
  className?: string;
  cssClass?: string;
}

export const MjmlTable: React.FC<IProps> = ({ children, ...props }) => {
  return React.createElement("mj-table", convertPropsToMjmlAttributes(props), children);
};

/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlTableProps {
  align?: "left" | "right" | "center";
  border?: React.CSSProperties["border"];
  cellpadding?: string;
  cellspacing?: string;
  containerBackgroundColor?: string;
  color?: React.CSSProperties["color"];
  fontFamily?: string;
  fontSize?: string | number;
  fontWeight?: React.CSSProperties["fontWeight"];
  lineHeight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  padding?: string | number;
  tableLayout?: "auto" | "fixed" | "initial" | "inherit";
  verticalAlign?: React.CSSProperties["verticalAlign"];
  width?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlTable({
  children,
  ...props
}: IMjmlTableProps): JSX.Element {
  return React.createElement(
    "mj-table",
    convertPropsToMjmlAttributes(props),
    children
  );
}

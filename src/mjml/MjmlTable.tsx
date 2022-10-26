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

export interface IMjmlTableProps {
  /** MJML default value: left */
  align?: "left" | "right" | "center";
  /** MJML default value: none */
  border?: React.CSSProperties["border"];
  /** MJML default value: 0 */
  cellpadding?: string;
  /** MJML default value: 0 */
  cellspacing?: string;
  containerBackgroundColor?: string;
  /** MJML default value: #000000 */
  color?: React.CSSProperties["color"];
  fontFamily?: string;
  fontSize?: Pixel;
  fontWeight?: string;
  lineHeight?: Pixel | Percentage;
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  paddingTop?: Pixel | Percentage;
  /** MJML default value: 10px 25px */
  padding?: Matrix<Pixel | Percentage>;
  role?: "none" | "presentation";
  tableLayout?: "auto" | "fixed" | "initial" | "inherit";
  verticalAlign?: React.CSSProperties["verticalAlign"];
  /** MJML default value: 100% */
  width?: Pixel | Percentage;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
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

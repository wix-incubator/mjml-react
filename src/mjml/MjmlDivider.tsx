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

export interface IMjmlDividerProps {
  borderColor?: React.CSSProperties["borderColor"];
  borderStyle?: React.CSSProperties["borderStyle"];
  borderWidth?: Pixel;
  containerBackgroundColor?: string;
  /** MJML default value: 10px 25px */
  padding?: Matrix<Pixel | Percentage>;
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  paddingTop?: Pixel | Percentage;
  /** MJML default value: 100% */
  width?: Pixel | Percentage;
  /** MJML default value: center */
  align?: "left" | "center" | "right";
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export function MjmlDivider(props: IMjmlDividerProps): JSX.Element {
  return React.createElement("mj-divider", convertPropsToMjmlAttributes(props));
}

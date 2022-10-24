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
  padding?: Matrix<Pixel | Percentage>;
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  paddingTop?: Pixel | Percentage;
  width?: Pixel | Percentage;
  align?: "left" | "center" | "right";
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export function MjmlDivider(props: IMjmlDividerProps): JSX.Element {
  return React.createElement("mj-divider", convertPropsToMjmlAttributes(props));
}

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

export interface IMjmlSpacerProps {
  border?: React.CSSProperties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  containerBackgroundColor?: string;
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  paddingTop?: Pixel | Percentage;
  padding?: Matrix<Pixel | Percentage>;
  /** MJML default value: 20px */
  height?: Pixel | Percentage;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export function MjmlSpacer(props: IMjmlSpacerProps): JSX.Element {
  return React.createElement("mj-spacer", convertPropsToMjmlAttributes(props));
}

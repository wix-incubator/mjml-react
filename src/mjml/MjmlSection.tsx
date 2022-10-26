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

export interface IMjmlSectionProps {
  backgroundColor?: React.CSSProperties["backgroundColor"];
  backgroundUrl?: string;
  backgroundRepeat?: React.CSSProperties["backgroundRepeat"];
  backgroundSize?: React.CSSProperties["backgroundSize"];
  backgroundPosition?: React.CSSProperties["backgroundPosition"];
  backgroundPositionX?: string;
  backgroundPositionY?: string;
  border?: React.CSSProperties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: React.CSSProperties["borderRadius"];
  borderRight?: string;
  borderTop?: string;
  /** MJML default value: ltr */
  direction?: "ltr" | "rtl";
  fullWidth?: boolean;
  /** MJML default value: 20px 0 */
  padding?: Matrix<Pixel | Percentage>;
  paddingTop?: Pixel | Percentage;
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  textAlign?: React.CSSProperties["textAlign"];
  textPadding?: Matrix<Pixel | Percentage>;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlSection({
  children,
  ...props
}: IMjmlSectionProps): JSX.Element {
  return React.createElement(
    "mj-section",
    convertPropsToMjmlAttributes(props),
    children
  );
}

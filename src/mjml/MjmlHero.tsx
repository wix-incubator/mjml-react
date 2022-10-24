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

export interface IMjmlHeroProps {
  mode?: string;
  height?: Pixel | Percentage;
  backgroundUrl?: string;
  backgroundWidth?: Pixel | Percentage;
  backgroundHeight?: Pixel | Percentage;
  backgroundPosition?: React.CSSProperties["backgroundPosition"];
  borderRadius?: React.CSSProperties["borderRadius"];
  containerBackgroundColor?: string;
  innerBackgroundColor?: string;
  innerPadding?: Matrix<Pixel | Percentage>;
  innerPaddingTop?: Pixel | Percentage;
  innerPaddingLeft?: Pixel | Percentage;
  innerPaddingRight?: Pixel | Percentage;
  innerPaddingBottom?: Pixel | Percentage;
  padding?: Matrix<Pixel | Percentage>;
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  paddingTop?: Pixel | Percentage;
  backgroundColor?: React.CSSProperties["backgroundColor"];
  verticalAlign?: React.CSSProperties["verticalAlign"];
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlHero({ children, ...props }: IMjmlHeroProps): JSX.Element {
  return React.createElement(
    "mj-hero",
    convertPropsToMjmlAttributes(props),
    children
  );
}

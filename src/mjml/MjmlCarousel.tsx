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

export interface IMjmlCarouselProps {
  align?: "left" | "center" | "right";
  borderRadius?: React.CSSProperties["borderRadius"];
  containerBackgroundColor?: string;
  iconWidth?: Pixel | Percentage;
  leftIcon?: string;
  padding?: Matrix<Pixel | Percentage>;
  paddingTop?: Pixel | Percentage;
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  rightIcon?: string;
  thumbnails?: "visible" | "hidden";
  tbBorder?: string;
  tbBorderRadius?: Pixel | Percentage;
  tbHoverBorderColor?: string;
  tbSelectedBorderColor?: string;
  tbWidth?: Pixel | Percentage;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlCarousel({
  children,
  ...props
}: IMjmlCarouselProps): JSX.Element {
  return React.createElement(
    "mj-carousel",
    convertPropsToMjmlAttributes(props),
    children
  );
}

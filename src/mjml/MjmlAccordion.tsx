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

export interface IMjmlAccordionProps {
  containerBackgroundColor?: string;
  border?: React.CSSProperties["border"];
  fontFamily?: string;
  iconAlign?: "top" | "middle" | "bottom";
  iconWidth?: Pixel | Percentage;
  iconHeight?: Pixel | Percentage;
  iconWrappedUrl?: string;
  iconWrappedAlt?: string;
  iconUnwrappedUrl?: string;
  iconUnwrappedAlt?: string;
  iconPosition?: "left" | "right";
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  paddingTop?: Pixel | Percentage;
  padding?: Matrix<Pixel | Percentage>;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlAccordion({
  children,
  ...props
}: IMjmlAccordionProps): JSX.Element {
  return React.createElement(
    "mj-accordion",
    convertPropsToMjmlAttributes(props),
    children
  );
}

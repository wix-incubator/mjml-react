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
  Ephemeral,
} from "../utils";

export interface IMjmlAccordionTextProps {
  backgroundColor?: React.CSSProperties["backgroundColor"];
  fontSize?: Pixel;
  fontFamily?: string;
  fontWeight?: string;
  letterSpacing?: Pixel | Ephemeral;
  lineHeight?: Pixel | Percentage;
  color?: React.CSSProperties["color"];
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  paddingTop?: Pixel | Percentage;
  /** MJML default value: 16px */
  padding?: Matrix<Pixel | Percentage>;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlAccordionText({
  children,
  ...props
}: IMjmlAccordionTextProps): JSX.Element {
  return React.createElement(
    "mj-accordion-text",
    convertPropsToMjmlAttributes(props),
    children
  );
}

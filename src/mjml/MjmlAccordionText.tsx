/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlAccordionTextProps {
  backgroundColor?: React.CSSProperties["backgroundColor"];
  fontSize?: string | number;
  fontFamily?: string;
  fontWeight?: string;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  color?: React.CSSProperties["color"];
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  padding?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
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

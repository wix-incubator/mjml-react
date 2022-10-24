/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes, Pixel, Percentage } from "../utils";

export interface IMjmlAccordionElementProps {
  backgroundColor?: React.CSSProperties["backgroundColor"];
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
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlAccordionElement({
  children,
  ...props
}: IMjmlAccordionElementProps): JSX.Element {
  return React.createElement(
    "mj-accordion-element",
    convertPropsToMjmlAttributes(props),
    children
  );
}

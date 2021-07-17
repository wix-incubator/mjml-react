import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlAccordionElement = ({
  children,
  ...rest
}: React.PropsWithChildren<MjmlAccordionElementProps>) => {
  return React.createElement(
    "mj-accordion-element",
    handleMjmlProps(rest),
    children
  );
};

export interface MjmlAccordionElementProps {
  fontFamily?: string | undefined;
  iconAlign?: string | undefined;
  iconWrappedUrl?: string | undefined;
  iconWrappedAlt?: string | undefined;
  iconUnwrappedAlt?: string | undefined;
  iconUnwrappedUrl?: string | undefined;
  iconPosition?: "left" | "right" | undefined;
  iconHeight?: string | undefined;
  iconWidth?: string | undefined;
  backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}

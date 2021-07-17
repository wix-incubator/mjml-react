import React from "react";
import { ClassNameProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlAccordionText = ({
  children,
  ...rest
}: React.PropsWithChildren<
  MjmlAccordionTextProps & PaddingProps & ClassNameProps
>) => {
  return React.createElement(
    "mj-accordion-text",
    handleMjmlProps(rest),
    children
  );
};

export interface MjmlAccordionTextProps {
  color?: React.CSSProperties["color"] | undefined;
  fontFamily?: string | undefined;
  fontSize?: string | number | undefined;
  backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}

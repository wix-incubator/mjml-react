import React from "react";
import { ClassNameProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlAccordionTitle = ({
  children,
  ...rest
}: React.PropsWithChildren<
  MjmlAccordionTitleProps & PaddingProps & ClassNameProps
>) => {
  return React.createElement(
    "mj-accordion-title",
    handleMjmlProps(rest),
    children
  );
};

export interface MjmlAccordionTitleProps {
  color?: React.CSSProperties["color"] | undefined;
  backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
  fontFamily?: string | undefined;
  fontSize?: string | number | undefined;
}

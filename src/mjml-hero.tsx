import React from "react";
import { ClassNameProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlHero = ({
  children,
  ...rest
}: React.PropsWithChildren<MjmlHeroProps & ClassNameProps & PaddingProps>) => {
  return React.createElement("mj-hero", handleMjmlProps(rest), children);
};

export interface MjmlHeroProps {
  width?: string | number | undefined;
  height?: string | number | undefined;
  mode?: "fluid-height" | "fixed-height" | undefined;
  backgroundWidth?: string | undefined;
  backgroundHeight?: string | undefined;
  backgroundUrl?: string | undefined;
  backgroundPosition?: React.CSSProperties["backgroundPosition"] | undefined;
  verticalAlign?: React.CSSProperties["verticalAlign"] | undefined;
  backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}

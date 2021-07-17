import React from "react";
import { ClassNameProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlCarousel = ({
  children,
  ...rest
}: React.PropsWithChildren<MjmlCarouselProps & ClassNameProps>) => {
  return React.createElement("mj-carousel", handleMjmlProps(rest), children);
};

export interface MjmlCarouselProps {
  backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
  align?: string | undefined;
  borderRadius?: string | number | undefined;
  thumbnails?: "hidden" | "visible" | undefined;
  tbBorder?: React.CSSProperties["border"] | undefined;
  tbBorderRadius?: React.CSSProperties["borderRadius"] | undefined;
  tbHoverBorderColor?: string | undefined;
  tbSelectedBorderColor?: string | undefined;
  tbWidth?: string | undefined;
  leftIcon?: string | undefined;
  rightIcon?: string | undefined;
  iconWidth?: string | undefined;
}

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

export interface IMjmlCarouselImageProps {
  alt?: string;
  href?: string;
  rel?: string;
  target?: string;
  title?: string;
  src?: string;
  thumbnailsSrc?: string;
  borderRadius?: React.CSSProperties["borderRadius"];
  tbBorder?: string;
  tbBorderRadius?: Matrix<Pixel | Percentage>;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlCarouselImage({
  children,
  ...props
}: IMjmlCarouselImageProps): JSX.Element {
  return React.createElement(
    "mj-carousel-image",
    convertPropsToMjmlAttributes(props),
    children
  );
}

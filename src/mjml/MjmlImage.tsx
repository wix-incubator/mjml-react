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

export interface IMjmlImageProps {
  alt?: string;
  href?: string;
  name?: string;
  src?: string;
  srcset?: string;
  sizes?: string;
  title?: string;
  rel?: string;
  align?: "left" | "center" | "right";
  border?: React.CSSProperties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderRadius?: React.CSSProperties["borderRadius"];
  containerBackgroundColor?: string;
  fluidOnMobile?: boolean;
  padding?: Matrix<Pixel | Percentage>;
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  paddingTop?: Pixel | Percentage;
  target?: string;
  width?: Pixel;
  height?: Pixel;
  maxHeight?: Pixel | Percentage;
  fontSize?: Pixel;
  usemap?: string;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export function MjmlImage(props: IMjmlImageProps): JSX.Element {
  return React.createElement("mj-image", convertPropsToMjmlAttributes(props));
}

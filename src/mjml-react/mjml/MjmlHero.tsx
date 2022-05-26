/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlHeroProps {
  mode?: string;
  height?: string | number;
  backgroundUrl?: string;
  backgroundWidth?: string | number;
  backgroundHeight?: string | number;
  backgroundPosition?: React.CSSProperties["backgroundPosition"];
  containerBackgroundColor?: string;
  innerBackgroundColor?: string;
  innerPadding?: string | number;
  innerPaddingTop?: string | number;
  innerPaddingLeft?: string | number;
  innerPaddingRight?: string | number;
  innerPaddingBottom?: string | number;
  padding?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  backgroundColor?: React.CSSProperties["backgroundColor"];
  verticalAlign?: React.CSSProperties["verticalAlign"];
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlHero({ children, ...props }: IMjmlHeroProps): JSX.Element {
  return React.createElement(
    "mj-hero",
    convertPropsToMjmlAttributes(props),
    children
  );
}

/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

interface IProps {
  border?: React.CSSProperties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  containerBackgroundColor?: string;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  padding?: string | number;
  height?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export const MjmlSpacer: React.FC<IProps> = ({ children, ...props }) => {
  return React.createElement(
    "mj-spacer",
    convertPropsToMjmlAttributes(props),
    children
  );
};

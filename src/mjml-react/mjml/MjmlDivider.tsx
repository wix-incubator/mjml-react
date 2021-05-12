/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

interface IProps {
  borderColor?: React.CSSProperties["borderColor"];
  borderStyle?: React.CSSProperties["borderStyle"];
  borderWidth?: string | number;
  containerBackgroundColor?: string;
  padding?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  width?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export const MjmlDivider: React.FC<IProps> = ({ children, ...props }) => {
  return React.createElement(
    "mj-divider",
    convertPropsToMjmlAttributes(props),
    children
  );
};

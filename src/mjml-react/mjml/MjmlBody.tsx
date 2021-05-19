/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlTextProps {
  width?: string | number;
  backgroundColor?: React.CSSProperties["backgroundColor"];
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export const MjmlBody: React.FC<IMjmlTextProps> = ({ children, ...props }) => {
  return React.createElement(
    "mj-body",
    convertPropsToMjmlAttributes(props),
    children
  );
};

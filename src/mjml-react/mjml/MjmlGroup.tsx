/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

interface IProps {
  backgroundColor?: React.CSSProperties["backgroundColor"];
  direction?: string;
  verticalAlign?: React.CSSProperties["verticalAlign"];
  width?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export const MjmlGroup: React.FC<IProps> = ({ children, ...props }) => {
  return React.createElement(
    "mj-group",
    convertPropsToMjmlAttributes(props),
    children
  );
};

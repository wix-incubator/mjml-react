/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlHeadProps {
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export const MjmlHead: React.FC<IMjmlHeadProps> = ({ children, ...props }) => {
  return React.createElement(
    "mj-head",
    convertPropsToMjmlAttributes(props),
    children
  );
};

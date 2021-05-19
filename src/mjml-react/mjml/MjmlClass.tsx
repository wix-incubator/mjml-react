/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlTextProps {
  name?: string;
  [prop: string]: string | undefined;
}

export const MjmlClass: React.FC<IMjmlTextProps> = ({ children, ...props }) => {
  return React.createElement(
    "mj-class",
    convertPropsToMjmlAttributes(props),
    children
  );
};

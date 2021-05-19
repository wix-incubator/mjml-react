/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlTextProps {
  owa?: string;
}

export const Mjml: React.FC<IMjmlTextProps> = ({ children, ...props }) => {
  return React.createElement(
    "mjml",
    convertPropsToMjmlAttributes(props),
    children
  );
};

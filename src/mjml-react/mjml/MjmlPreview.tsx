/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

interface IProps {
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export const MjmlPreview: React.FC<IProps> = ({ children, ...props }) => {
  return React.createElement(
    "mj-preview",
    convertPropsToMjmlAttributes(props),
    children
  );
};

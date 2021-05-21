/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlTitleProps {
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export const MjmlTitle: React.FC<IMjmlTitleProps> = ({
  children,
  ...props
}) => {
  return React.createElement(
    "mj-title",
    convertPropsToMjmlAttributes(props),
    children
  );
};

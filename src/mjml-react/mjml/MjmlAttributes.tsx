/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlAttributesProps {
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export const MjmlAttributes: React.FC<IMjmlAttributesProps> = ({
  children,
  ...props
}) => {
  return React.createElement(
    "mj-attributes",
    convertPropsToMjmlAttributes(props),
    children
  );
};

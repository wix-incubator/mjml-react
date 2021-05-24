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
  children?: React.ReactNode;
}

export function MjmlAttributes({
  children,
  ...props
}: IMjmlAttributesProps): JSX.Element {
  return React.createElement(
    "mj-attributes",
    convertPropsToMjmlAttributes(props),
    children
  );
}

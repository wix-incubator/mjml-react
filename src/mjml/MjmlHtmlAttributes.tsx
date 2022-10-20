/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlHtmlAttributesProps {
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlHtmlAttributes({
  children,
  ...props
}: IMjmlHtmlAttributesProps): JSX.Element {
  return React.createElement(
    "mj-html-attributes",
    convertPropsToMjmlAttributes(props),
    children
  );
}

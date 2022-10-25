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
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlTitle({
  children,
  ...props
}: IMjmlTitleProps): JSX.Element {
  return React.createElement(
    "mj-title",
    convertPropsToMjmlAttributes(props),
    children
  );
}

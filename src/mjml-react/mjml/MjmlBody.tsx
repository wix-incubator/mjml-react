/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlBodyProps {
  width?: string | number;
  backgroundColor?: React.CSSProperties["backgroundColor"];
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlBody({ children, ...props }: IMjmlBodyProps): JSX.Element {
  return React.createElement(
    "mj-body",
    convertPropsToMjmlAttributes(props),
    children
  );
}

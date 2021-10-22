/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlProps {
  owa?: string;
  lang?: string;
  children?: React.ReactNode;
}

export function Mjml({ children, ...props }: IMjmlProps): JSX.Element {
  return React.createElement(
    "mjml",
    convertPropsToMjmlAttributes(props),
    children
  );
}

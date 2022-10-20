/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlFontProps {
  name?: string;
  href?: string;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlFont({ children, ...props }: IMjmlFontProps): JSX.Element {
  return React.createElement(
    "mj-font",
    convertPropsToMjmlAttributes(props),
    children
  );
}

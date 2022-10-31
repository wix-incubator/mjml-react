/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlStyleProps {
  inline?: boolean;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlStyle({
  children,
  ...props
}: IMjmlStyleProps): JSX.Element {
  return React.createElement(
    "mj-style",
    convertPropsToMjmlAttributes(props),
    children
  );
}

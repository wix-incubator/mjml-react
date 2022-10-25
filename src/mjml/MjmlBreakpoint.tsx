/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlBreakpointProps {
  width?: string;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlBreakpoint(props: IMjmlBreakpointProps): JSX.Element {
  return React.createElement(
    "mj-breakpoint",
    convertPropsToMjmlAttributes(props)
  );
}

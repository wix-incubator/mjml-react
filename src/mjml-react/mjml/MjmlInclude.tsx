/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlIncludeProps {
  path?: string;
}

export function MjmlInclude(props: IMjmlIncludeProps): JSX.Element {
  return React.createElement("mj-include", convertPropsToMjmlAttributes(props));
}

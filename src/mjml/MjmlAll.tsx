/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlAllProps {
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  [prop: string]: string | undefined;
}

export function MjmlAll(props: IMjmlAllProps): JSX.Element {
  return React.createElement("mj-all", convertPropsToMjmlAttributes(props));
}

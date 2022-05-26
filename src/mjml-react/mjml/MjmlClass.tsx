/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlClassProps {
  name?: string;
  [prop: string]: string | undefined;
}

export function MjmlClass(props: IMjmlClassProps): JSX.Element {
  return React.createElement("mj-class", convertPropsToMjmlAttributes(props));
}

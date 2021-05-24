/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlPreviewProps {
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlPreview({
  children,
  ...props
}: IMjmlPreviewProps): JSX.Element {
  return React.createElement(
    "mj-preview",
    convertPropsToMjmlAttributes(props),
    children
  );
}

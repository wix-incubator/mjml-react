/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

interface IProps {
  inline?: boolean;
}

export const MjmlStyle: React.FC<IProps> = ({ children, ...props }) => {
  return React.createElement("mj-style", {
    ...convertPropsToMjmlAttributes(props),
    dangerouslySetInnerHTML: { __html: children },
  });
};

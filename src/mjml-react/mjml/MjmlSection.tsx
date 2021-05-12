/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

interface IProps {
  backgroundColor?: React.CSSProperties["backgroundColor"];
  backgroundUrl?: string;
  backgroundRepeat?: React.CSSProperties["backgroundRepeat"];
  backgroundSize?: React.CSSProperties["backgroundSize"];
  backgroundPosition?: React.CSSProperties["backgroundPosition"];
  backgroundPositionX?: string;
  backgroundPositionY?: string;
  border?: React.CSSProperties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: React.CSSProperties["borderRadius"];
  borderRight?: string;
  borderTop?: string;
  direction?: string;
  fullWidth?: boolean;
  padding?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  textAlign?: React.CSSProperties["textAlign"];
  textPadding?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export const MjmlSection: React.FC<IProps> = ({ children, ...props }) => {
  return React.createElement(
    "mj-section",
    convertPropsToMjmlAttributes(props),
    children
  );
};

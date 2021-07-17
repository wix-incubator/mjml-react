import React from "react";
import {
  BorderProps,
  ClassNameProps,
  InnerBorderProps,
  PaddingProps,
} from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlColumn = ({
  children,
  ...rest
}: React.PropsWithChildren<
  MjmlColumnProps &
    PaddingProps &
    ClassNameProps &
    BorderProps &
    InnerBorderProps
>) => {
  return React.createElement("mj-column", handleMjmlProps(rest), children);
};

export interface MjmlColumnProps {
  width?: string | number | undefined;
  verticalAlign?: React.CSSProperties["verticalAlign"] | undefined;
  backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
  innerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}

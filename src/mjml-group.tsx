import React from "react";
import { ClassNameProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlGroup = ({
  children,
  ...rest
}: React.PropsWithChildren<MjmlGroupProps & ClassNameProps>) => {
  return React.createElement("mj-group", handleMjmlProps(rest), children);
};

export interface MjmlGroupProps {
  width?: string | number | undefined;
  verticalAlign?: React.CSSProperties["verticalAlign"] | undefined;
  backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}

import React from "react";
import { ClassNameProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlTable = ({
  children,
  ...rest
}: React.PropsWithChildren<MjmlTableProps & PaddingProps & ClassNameProps>) => {
  return React.createElement("mj-table", handleMjmlProps(rest), children);
};

export interface MjmlTableProps {
  color?: React.CSSProperties["color"] | undefined;
  cellpadding?: string | undefined;
  cellspacing?: string | undefined;
  fontFamily?: string | undefined;
  fontSize?: string | number | undefined;
  fontStyle?: string | undefined;
  lineHeight?: string | number | undefined;
  containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
  width?: string | number | undefined;
  tableLayout?: "auto" | "fixed" | "initial" | "inherit" | undefined;
  align?: "left" | "right" | "center" | undefined;
  role?: "presentation" | "none";
  border?: React.CSSProperties["border"] | undefined;
}

import React from "react";
import { ClassNameProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlDivider = ({
  children,
  ...rest
}: React.PropsWithChildren<
  MjmlDividerProps & ClassNameProps & PaddingProps
>) => {
  return React.createElement("mj-divider", handleMjmlProps(rest), null);
};

export interface MjmlDividerProps {
  borderColor?: React.CSSProperties["borderColor"] | undefined;
  borderStyle?: React.CSSProperties["borderStyle"] | undefined;
  borderWidth?: string | number | undefined;
  width?: string | number | undefined;
  containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}

import React from "react";
import { BorderProps, ClassNameProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlWrapper = ({
  children,
  ...rest
}: React.PropsWithChildren<
  MjmlWrapperProps & BorderProps & PaddingProps & ClassNameProps
>) => {
  return React.createElement("mj-wrapper", handleMjmlProps(rest), children);
};

export interface MjmlWrapperProps {
  fullWidth?: boolean | undefined;
  backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
  backgroundUrl?: string | undefined;
  backgroundRepeat?: React.CSSProperties["backgroundRepeat"] | undefined;
  backgroundSize?: React.CSSProperties["backgroundSize"] | undefined;
  verticalAlign?: React.CSSProperties["verticalAlign"] | undefined;
  textAlign?: React.CSSProperties["textAlign"] | undefined;
}

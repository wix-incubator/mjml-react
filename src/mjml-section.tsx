import React from "react";
import { BorderProps, ClassNameProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlSection = ({
  children,
  ...rest
}: React.PropsWithChildren<
  MjmlSectionProps & BorderProps & PaddingProps & ClassNameProps
>) => {
  return React.createElement("mj-section", handleMjmlProps(rest), children);
};

export interface MjmlSectionProps {
  fullWidth?: boolean | undefined;
  backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
  backgroundUrl?: string | undefined;
  backgroundRepeat?: React.CSSProperties["backgroundRepeat"] | undefined;
  backgroundSize?: React.CSSProperties["backgroundSize"] | undefined;
  verticalAlign?: React.CSSProperties["verticalAlign"] | undefined;
  textAlign?: React.CSSProperties["textAlign"] | undefined;
  direction?: "ltr" | "rtl" | undefined;
}

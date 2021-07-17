import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlBreakpoint = ({
  children,
  ...rest
}: React.PropsWithChildren<MjmlBreakpointProps>) => {
  return React.createElement("mj-breakpoint", handleMjmlProps(rest), null);
};

export interface MjmlBreakpointProps {
  width?: string | number | undefined;
}

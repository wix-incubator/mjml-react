import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlBreakpoint = ({ children, ...rest }) => {
  return React.createElement(
    "mj-breakpoint",
    handleMjmlProps(rest),
    null
  );
};

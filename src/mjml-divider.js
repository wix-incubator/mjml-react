import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlDivider = ({ children, ...rest }) => {
  return React.createElement("mj-divider", handleMjmlProps(rest), null);
};

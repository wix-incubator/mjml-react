import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlColumn = ({ children, ...rest }) => {
  return React.createElement("mj-column", handleMjmlProps(rest), children);
};

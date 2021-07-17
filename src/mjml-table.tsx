import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlTable = ({ children, ...rest }) => {
  return React.createElement("mj-table", handleMjmlProps(rest), children);
};

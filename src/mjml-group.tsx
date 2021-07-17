import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlGroup = ({ children, ...rest }) => {
  return React.createElement("mj-group", handleMjmlProps(rest), children);
};

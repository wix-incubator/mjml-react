import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlTitle = ({ children, ...rest }) => {
  return React.createElement("mj-title", handleMjmlProps(rest), children);
};

import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlHead = ({ children, ...rest }) => {
  return React.createElement("mj-head", handleMjmlProps(rest), children);
};

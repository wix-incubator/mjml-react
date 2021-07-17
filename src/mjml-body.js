import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlBody = ({ children, ...rest }) => {
  return React.createElement("mj-body", handleMjmlProps(rest), children);
};

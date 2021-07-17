import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlAttributes = ({ children, ...rest }) => {
  return React.createElement("mj-attributes", handleMjmlProps(rest), children);
};

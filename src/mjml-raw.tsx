import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlRaw = ({ children, ...rest }) => {
  return React.createElement("mj-raw", handleMjmlProps(rest), children);
};

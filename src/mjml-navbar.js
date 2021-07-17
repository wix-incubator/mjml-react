import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlNavbar = ({ children, ...rest }) => {
  return React.createElement("mj-navbar", handleMjmlProps(rest), children);
};

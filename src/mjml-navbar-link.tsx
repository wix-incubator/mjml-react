import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlNavbarLink = ({ children, ...rest }) => {
  return React.createElement("mj-navbar-link", handleMjmlProps(rest), children);
};

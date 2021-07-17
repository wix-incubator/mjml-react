import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlButton = ({ children, ...rest }) => {
  return React.createElement("mj-button", handleMjmlProps(rest), children);
};

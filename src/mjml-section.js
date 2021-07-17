import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlSection = ({ children, ...rest }) => {
  return React.createElement("mj-section", handleMjmlProps(rest), children);
};

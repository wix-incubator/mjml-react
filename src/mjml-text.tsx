import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlText = ({ children, ...rest }) => {
  return React.createElement("mj-text", handleMjmlProps(rest), children);
};

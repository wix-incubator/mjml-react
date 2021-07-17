import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlClass = ({ children, ...rest }) => {
  return React.createElement("mj-class", handleMjmlProps(this.props), null);
};

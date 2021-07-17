import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlFont = ({ children, ...rest }) => {
  return React.createElement("mj-font", handleMjmlProps(this.props), null);
};

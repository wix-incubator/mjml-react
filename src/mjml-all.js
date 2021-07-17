import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlAll = ({ children, ...rest }) => {
  return React.createElement("mj-all", handleMjmlProps(this.props), null);
};

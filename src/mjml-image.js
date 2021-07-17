import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlImage = ({ children, ...rest }) => {
  return React.createElement("mj-image", handleMjmlProps(this.props), null);
};

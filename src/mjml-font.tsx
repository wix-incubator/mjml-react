import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlFont = ({ children, ...rest }) => {
  return React.createElement("mj-font", handleMjmlProps(rest), null);
};

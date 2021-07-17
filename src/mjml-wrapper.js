import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlWrapper = ({ children, ...rest }) => {
  return React.createElement("mj-wrapper", handleMjmlProps(rest), children);
};

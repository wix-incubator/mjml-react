import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlPreview = ({ children, ...rest }) => {
  return React.createElement("mj-preview", handleMjmlProps(rest), children);
};

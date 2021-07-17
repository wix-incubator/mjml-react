import React from "react";

import { handleMjmlProps } from "./utils";

export const Mjml = ({ children, ...rest }) => {
  return React.createElement("mjml", handleMjmlProps(rest), children);
};

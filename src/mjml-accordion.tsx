import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlAccordion = ({ children, ...rest }) => {
  return React.createElement("mj-accordion", handleMjmlProps(rest), children);
};

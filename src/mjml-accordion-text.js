import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlAccordionText = ({ children, ...rest }) => {
  return React.createElement(
    "mj-accordion-text",
    handleMjmlProps(rest),
    children
  );
};

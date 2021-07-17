import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlAccordionElement = ({ children, ...rest }) => {
  return React.createElement(
    "mj-accordion-element",
    handleMjmlProps(rest),
    children
  );
};

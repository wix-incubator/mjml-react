import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlAccordionTitle = ({ children, ...rest }) => {
  return React.createElement(
    "mj-accordion-title",
    handleMjmlProps(rest),
    children
  );
};

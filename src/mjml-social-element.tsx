import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlSocialElement = ({ children, ...rest }) => {
  return React.createElement(
    "mj-social-element",
    handleMjmlProps(rest),
    children
  );
};

import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlHero = ({ children, ...rest }) => {
  return React.createElement("mj-hero", handleMjmlProps(rest), children);
};

import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlSocial = ({ children, ...rest }) => {
  return React.createElement("mj-social", handleMjmlProps(rest), children);
};

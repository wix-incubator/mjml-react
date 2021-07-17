import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlSpacer = ({ children, ...rest }) => {
  return React.createElement("mj-spacer", handleMjmlProps(rest), null);
};

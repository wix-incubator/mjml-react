import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlTitle = ({ children, ...rest }: { children: string }) => {
  return React.createElement("mj-title", handleMjmlProps(rest), children);
};

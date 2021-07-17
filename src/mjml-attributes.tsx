import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlAttributes = ({
  children,
  ...rest
}: React.PropsWithChildren<unknown>) => {
  return React.createElement("mj-attributes", handleMjmlProps(rest), children);
};

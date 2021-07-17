import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlHead = ({
  children,
  ...rest
}: React.PropsWithChildren<{}>) => {
  return React.createElement("mj-head", handleMjmlProps(rest), children);
};

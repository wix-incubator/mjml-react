import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlAll = ({
  children,
  ...rest
}: {
  [key: string]: any;
  children?: React.ReactNode | undefined;
}) => {
  return React.createElement("mj-all", handleMjmlProps(rest), null);
};

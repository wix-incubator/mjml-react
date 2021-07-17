import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlClass = ({
  children,
  ...rest
}: {
  [key: string]: any;
  children?: React.ReactNode | undefined;
  name: string;
}) => {
  return React.createElement("mj-class", handleMjmlProps(rest), null);
};

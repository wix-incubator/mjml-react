import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlPreview = ({
  children,
  ...rest
}: React.PropsWithChildren<{ children: string }>) => {
  return React.createElement("mj-preview", handleMjmlProps(rest), children);
};

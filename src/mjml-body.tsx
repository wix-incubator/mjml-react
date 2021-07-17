import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlBody = ({
  children,
  ...rest
}: React.PropsWithChildren<{
  width?: number | undefined;
  backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}>) => {
  return React.createElement("mj-body", handleMjmlProps(rest), children);
};

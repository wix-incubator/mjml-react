import React from "react";

import { handleMjmlProps } from "./utils";

export const Mjml = ({
  children,
  ...rest
}: React.PropsWithChildren<MjmlProps>) => {
  return React.createElement("mjml", handleMjmlProps(rest), children);
};

export interface MjmlProps {
  lang?: string | undefined;
  owa?: string | undefined;
}

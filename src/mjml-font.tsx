import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlFont = ({
  ...rest
}: {
  href?: string | undefined;
  name?: string | undefined;
}) => {
  return React.createElement("mj-font", handleMjmlProps(rest), null);
};

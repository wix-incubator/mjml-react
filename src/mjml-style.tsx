import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlStyle = ({
  children,
  ...rest
}: {
  children: string;
  inline?: boolean | undefined;
}) => {
  return React.createElement("mj-style", {
    ...handleMjmlProps(rest),
    dangerouslySetInnerHTML: { __html: children },
  });
};

import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlStyle = ({ children, ...rest }) => {
  return React.createElement("mj-style", {
    ...handleMjmlProps(rest),
    dangerouslySetInnerHTML: { __html: children },
  });
};

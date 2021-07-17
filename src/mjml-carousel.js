import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlCarousel = ({ children, ...rest }) => {
  return React.createElement("mj-carousel", handleMjmlProps(rest), children);
};

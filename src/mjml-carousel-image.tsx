import React from "react";

import { handleMjmlProps } from "./utils";

export const MjmlCarouselImage = ({ children, ...rest }) => {
  return React.createElement(
    "mj-carousel-image",
    handleMjmlProps(rest),
    null
  );
};

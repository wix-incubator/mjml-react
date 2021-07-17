import React from "react";
import { ClassNameProps, HrefProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlCarouselImage = ({
  children,
  ...rest
}: React.PropsWithChildren<
  MjmlCarouselImageProps & ClassNameProps & HrefProps
>) => {
  return React.createElement("mj-carousel-image", handleMjmlProps(rest), null);
};
export interface MjmlCarouselImageProps {
  src?: string | undefined;
  thumbnailsSrc?: string | undefined;
  alt?: string | undefined;
  title?: string | undefined;
}

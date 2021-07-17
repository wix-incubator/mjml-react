import React from "react";
import { ClassNameProps, HrefProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlImage = ({
  children,
  ...rest
}: React.PropsWithChildren<
  MjmlImageProps & PaddingProps & ClassNameProps & HrefProps
>) => {
  return React.createElement("mj-image", handleMjmlProps(rest), null);
};

// mj-image
export interface MjmlImageProps {
  containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
  border?: React.CSSProperties["border"] | undefined;
  borderRadius?: string | number | undefined;
  width?: string | number | undefined;
  height?: string | number | undefined;
  src?: string | undefined;
  srcset?: string | undefined;
  alt?: string | undefined;
  align?: string | undefined;
  title?: string | undefined;
  fluidOnMobile?: string | undefined;
}

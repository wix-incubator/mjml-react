export interface RequiredChildrenProps {
  children: React.ReactNode;
}

export interface PaddingProps {
  padding?: string | number | undefined;
  paddingTop?: string | number | undefined;
  paddingRight?: string | number | undefined;
  paddingBottom?: string | number | undefined;
  paddingLeft?: string | number | undefined;
}

export interface BorderProps {
  border?: string | undefined;
  borderBottom?: string | undefined;
  borderLeft?: string | undefined;
  borderTop?: string | undefined;
  borderRight?: string | undefined;
  borderRadius?: string | number | undefined;
}

export interface InnerBorderProps {
  innerBorder?: string | undefined;
  innerBorderBottom?: string | undefined;
  innerBorderLeft?: string | undefined;
  innerBorderTop?: string | undefined;
  innerBorderRight?: string | undefined;
  innerBorderRadius?: string | number | undefined;
}

export interface ClassNameProps {
  cssClass?: string | undefined;
  mjClass?: string | undefined;
}

export interface HrefProps {
  href?: string | undefined;
  target?: string | undefined;
  rel?: string | undefined;
}

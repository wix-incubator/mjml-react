import React from 'react';

import { MjmlPx, MjmlColor, MjmlString } from './types';
import { handleMjmlProps } from './utils';

type Props = {
  containerBackgroundColor?: MjmlColor;
  cssClass?: MjmlString;
  height?: MjmlPx;
  padding?: MjmlPx;
  paddingBottom?: MjmlPx;
  paddingLeft?: MjmlPx;
  paddingRight?: MjmlPx;
  paddingTop?: MjmlPx;
  verticalAlign?: MjmlString;
  width?: MjmlPx;
};

export function MjmlSpacer(props: Props) {
  return React.createElement('mj-spacer', handleMjmlProps(props), null);
}

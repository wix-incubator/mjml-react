import React from 'react';

import { MjmlBoolean } from './types';
import { handleMjmlProps } from './utils';

type Props = {
  inline?: MjmlBoolean;
  children?: string;
};

export function MjmlStyle(props: Props) {
  const { children, ...rest } = props;
  return React.createElement('mj-style', {
    ...handleMjmlProps(rest),
    dangerouslySetInnerHTML: { __html: children },
  });
}

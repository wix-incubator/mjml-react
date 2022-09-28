import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlHtmlAttribute extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement(
      'mj-html-attribute',
      handleMjmlProps(rest),
      children,
    );
  }
}

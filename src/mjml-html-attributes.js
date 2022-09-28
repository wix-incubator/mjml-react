import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlHtmlAttributes extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement(
      'mj-html-attributes',
      handleMjmlProps(rest),
      children,
    );
  }
}

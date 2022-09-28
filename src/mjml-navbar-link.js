import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlNavbarLink extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement(
      'mj-navbar-link',
      handleMjmlProps(rest),
      children,
    );
  }
}

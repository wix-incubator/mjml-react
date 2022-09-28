import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlNavbar extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-navbar', handleMjmlProps(rest), children);
  }
}

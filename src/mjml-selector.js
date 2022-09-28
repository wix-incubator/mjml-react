import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlSelector extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-selector', handleMjmlProps(rest), children);
  }
}

import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlWrapper extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-wrapper', handleMjmlProps(rest), children);
  }
}

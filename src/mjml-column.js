import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlColumn extends Component {
  

  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-column', handleMjmlProps(rest), children);
  }
}

import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlHead extends Component {
  

  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-head', handleMjmlProps(rest), children);
  }
}

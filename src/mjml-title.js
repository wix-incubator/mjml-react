import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlTitle extends Component {
  

  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-title', handleMjmlProps(rest), children);
  }
}

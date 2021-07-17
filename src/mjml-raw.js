import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlRaw extends Component {
  

  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-raw', handleMjmlProps(rest), children);
  }
}

import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlGroup extends Component {
  

  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-group', handleMjmlProps(rest), children);
  }
}

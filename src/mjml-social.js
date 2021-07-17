import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlSocial extends Component {
  

  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-social', handleMjmlProps(rest), children);
  }
}

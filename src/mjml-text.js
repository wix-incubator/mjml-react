import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlText extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-text', handleMjmlProps(rest), children);
  }
}

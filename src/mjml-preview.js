import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlPreview extends Component {
  

  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-preview', handleMjmlProps(rest), children);
  }
}

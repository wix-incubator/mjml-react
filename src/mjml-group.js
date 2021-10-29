import React, { Component } from 'react';
import { node } from 'prop-types';

import { handleMjmlProps } from './utils';

export class MjmlGroup extends Component {
  static propTypes = {
    children: node,
  };

  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-group', handleMjmlProps(rest), children);
  }
}

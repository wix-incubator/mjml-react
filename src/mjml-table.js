import React, {Component} from 'react';
import {node} from 'prop-types';

import {handleMjmlProps} from './utils';

export class MjmlTable extends Component {
  static propTypes = {
    children: node
  };

  render() {
    const {children, ...rest} = this.props;
    return React.createElement('mj-table', handleMjmlProps(rest), children);
  }
}

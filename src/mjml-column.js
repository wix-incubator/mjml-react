import React, {Component} from 'react';
import {node} from 'prop-types';

import {handleMjmlProps} from './utils';

export class MjmlColumn extends Component {

  static propTypes = {
    children: node.isRequired
  }

  render() {
    const {children, ...rest} = this.props;
    return React.createElement('mj-column', handleMjmlProps(rest), children);
  }

}

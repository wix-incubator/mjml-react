import React, {Component} from 'react';
import {node} from 'prop-types';

import {handleMjmlProps} from './utils';

export class MjmlSection extends Component {

  static propTypes = {
    children: node
  }

  render() {
    const {children, ...rest} = this.props;
    return React.createElement('mj-section', handleMjmlProps(rest), children);
  }

}

import React, {Component} from 'react';
import {node} from 'prop-types';

import {handleMjmlProps} from './utils';

export class MjmlText extends Component {

  static propTypes = {
    children: node
  }

  render() {
    const {children, ...rest} = this.props;
    return React.createElement('mj-text', handleMjmlProps(rest), children);
  }

}

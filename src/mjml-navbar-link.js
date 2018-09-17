import React, {Component} from 'react';
import {node} from 'prop-types';

import {handleMjmlProps} from './utils';

export class MjmlNavbarLink extends Component {
  static propTypes = {
    children: node.isRequired
  };

  render() {
    const {children, ...rest} = this.props;
    return React.createElement(
      'mj-navbar-link',
      handleMjmlProps(rest),
      children
    );
  }
}

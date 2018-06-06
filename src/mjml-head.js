import React, {Component} from 'react';
import {node} from 'prop-types';

export class MjmlHead extends Component {

  static propTypes = {
    children: node.isRequired
  }

  render() {
    return React.createElement('mj-head', {}, this.props.children);
  }

}

import React, {Component} from 'react';
import {node} from 'prop-types';

export class MjmlRaw extends Component {

  static propTypes = {
    children: node.isRequired
  }

  render() {
    return React.createElement('mj-raw', {}, this.props.children);
  }

}

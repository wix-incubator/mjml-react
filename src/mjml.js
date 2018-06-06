import React, {Component} from 'react';
import {node} from 'prop-types';

export class Mjml extends Component {

  static propTypes = {
    children: node.isRequired
  }

  render() {
    return React.createElement('mjml', {}, this.props.children);
  }

}

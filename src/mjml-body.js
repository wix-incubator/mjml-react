import React, {Component} from 'react';
import {node, number, string} from 'prop-types';

export class MjmlBody extends Component {

  static propTypes = {
    width: number.isRequired,
    backgroundColor: string.isRequired,
    cssClass: string,
    children: node.isRequired
  }

  static defaultProps = {
    width: 600,
    backgroundColor: '#ffffff'
  }

  render() {
    return React.createElement('mj-body', {
      'width': `${this.props.width}px`,
      'background-color': this.props.backgroundColor,
      'css-class': this.props.cssClass
    }, this.props.children);
  }

}

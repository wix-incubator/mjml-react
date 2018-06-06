import React, {Component} from 'react';
import {string} from 'prop-types';

export class MjmlTitle extends Component {

  static propTypes = {
    children: string.isRequired
  }

  render() {
    return React.createElement('mj-title', {}, this.props.children);
  }

}

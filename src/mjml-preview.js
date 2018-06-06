import React, {Component} from 'react';
import {string} from 'prop-types';

export class MjmlPreview extends Component {

  static propTypes = {
    children: string.isRequired
  }

  render() {
    return React.createElement('mj-preview', {}, this.props.children);
  }

}

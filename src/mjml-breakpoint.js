import React, {Component} from 'react';
import {number} from 'prop-types';

export class MjmlBreakpoint extends Component {

  static propTypes = {
    width: number.isRequired
  }

  render() {
    return React.createElement('mj-head', {
      'width': `${this.props.width}px`
    }, null);
  }

}

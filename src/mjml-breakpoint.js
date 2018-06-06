import React, {Component} from 'react';
import {number} from 'prop-types';

export class MjmlBreakpoint extends Component {

  static propTypes = {
    width: number.isRequired
  }

  static defaultProps = {
    width: 320
  }

  render() {
    return React.createElement('mj-breakpoint', {
      'width': `${this.props.width}px`
    }, null);
  }

}

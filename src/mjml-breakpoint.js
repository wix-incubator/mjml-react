import React, {Component} from 'react';

import {handleMjmlProps} from './utils';

export class MjmlBreakpoint extends Component {

  render() {
    return React.createElement('mj-breakpoint', handleMjmlProps(this.props), null);
  }

}

import React, {Component} from 'react';

import {handleMjmlProps} from './utils';

export class MjmlDivider extends Component {

  render() {
    return React.createElement('mj-divider', handleMjmlProps(this.props), null);
  }

}

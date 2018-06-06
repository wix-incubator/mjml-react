import React, {Component} from 'react';

import {handleMjmlProps} from './utils';

export class MjmlSpacer extends Component {

  render() {
    return React.createElement('mj-spacer', handleMjmlProps(this.props), null);
  }

}

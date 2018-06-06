import React, {Component} from 'react';

import {handleMjmlProps} from './utils';

export class MjmlFont extends Component {

  render() {
    return React.createElement('mj-font', handleMjmlProps(this.props), null);
  }

}

import React, {Component} from 'react';

import {handleMjmlProps} from './utils';

export class MjmlAll extends Component {

  render() {
    return React.createElement('mj-all', handleMjmlProps(this.props), null);
  }

}

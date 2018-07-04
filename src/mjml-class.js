import React, {Component} from 'react';

import {handleMjmlProps} from './utils';

export class MjmlClass extends Component {

  render() {
    return React.createElement('mj-class', handleMjmlProps(this.props), null);
  }

}

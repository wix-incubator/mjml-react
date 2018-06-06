import React, {Component} from 'react';

import {handleMjmlProps} from './utils';

export class MjmlImage extends Component {

  render() {
    return React.createElement('mj-image', handleMjmlProps(this.props), null);
  }

}

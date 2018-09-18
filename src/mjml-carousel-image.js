import React, {Component} from 'react';

import {handleMjmlProps} from './utils';

export class MjmlCarouselImage extends Component {
  render() {
    return React.createElement('mj-carousel-image', handleMjmlProps(this.props), null);
  }
}

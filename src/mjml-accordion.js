import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlAccordion extends Component {
  

  render() {
    const { children, ...rest } = this.props;
    return React.createElement('mj-accordion', handleMjmlProps(rest), children);
  }
}

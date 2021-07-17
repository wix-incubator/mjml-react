import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlAccordionTitle extends Component {
  

  render() {
    const { children, ...rest } = this.props;
    return React.createElement(
      'mj-accordion-title',
      handleMjmlProps(rest),
      children,
    );
  }
}

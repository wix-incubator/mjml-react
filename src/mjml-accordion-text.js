import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlAccordionText extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement(
      'mj-accordion-text',
      handleMjmlProps(rest),
      children,
    );
  }
}

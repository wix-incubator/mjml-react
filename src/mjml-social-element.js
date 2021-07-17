import React, { Component } from 'react';

import { handleMjmlProps } from './utils';

export class MjmlSocialElement extends Component {
  

  render() {
    const { children, ...rest } = this.props;
    return React.createElement(
      'mj-social-element',
      handleMjmlProps(rest),
      children,
    );
  }
}

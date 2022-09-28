import React, { Component } from 'react';

import { MjmlComment } from './mjml-comment';

export class MjmlConditionalComment extends Component {
  static defaultProps = {
    condition: 'if gte mso 9',
  };

  render() {
    const { children, condition, ...rest } = this.props;
    if (children && children.trim().length) {
      return (
        <MjmlComment {...rest}>
          {`[${condition}]>${children}<![endif]`}
        </MjmlComment>
      );
    }
    return null;
  }
}

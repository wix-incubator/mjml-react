import React, {Component} from 'react';
import {string} from 'prop-types';

import {MjmlComment} from './mjml-comment';

export class MjmlConditionalComment extends Component {

  static propTypes = {
    children: string.isRequired,
    condition: string.isRequired
  }

  static defaultProps = {
    condition: 'if gte mso 9'
  }

  render() {
    const {children, condition, ...rest} = this.props;
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

import React, {Component} from 'react';
import {string} from 'prop-types';

import {handleMjmlProps} from '../utils';

export class MjmlComment extends Component {

  static propTypes = {
    children: string.isRequired
  }

  render() {
    const {children, ...rest} = this.props;
    return React.createElement('mj-raw', {
      ...handleMjmlProps(rest),
      dangerouslySetInnerHTML: {
        __html: `<!--${children}-->`
      }
    });
  }

}

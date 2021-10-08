import { Component } from 'react';
import { node } from 'prop-types';

import { createElement } from './utils/index';

export class MjmlSocialElement extends Component {
  static propTypes = {
    children: node,
  };

  render() {
    const { children, ...rest } = this.props;
    return createElement('mj-social-element', rest, children);
  }
}

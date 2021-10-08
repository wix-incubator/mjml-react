import { Component } from 'react';
import { string } from 'prop-types';

import { createElement } from './utils/index';

export class MjmlPreview extends Component {
  static propTypes = {
    children: string.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;
    return createElement('mj-preview', rest, children);
  }
}

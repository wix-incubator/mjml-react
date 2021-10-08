import { Component } from 'react';
import { node } from 'prop-types';

import { createElement } from './utils/index';

export class MjmlAccordionElement extends Component {
  static propTypes = {
    children: node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;
    return createElement('mj-accordion-element', rest, children);
  }
}

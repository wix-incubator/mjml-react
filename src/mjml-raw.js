import React, {Component} from 'react';
import {
  node,
  oneOfType,
  string,
} from 'prop-types';

import {handleMjmlProps} from './utils';

const getInnerHtmlRenderer = type =>
  (props, innerHtml) =>
    React.createElement(type, {
      ...props,
      dangerouslySetInnerHTML: {__html: innerHtml}
    });

const getChildrenRenderer = type =>
  (props, children) =>
    React.createElement(type, props, children);

export class MjmlRaw extends Component {

  static propTypes = {
    children: oneOfType([node, string]).isRequired
  }

  render() {
    const {children, ...rest} = this.props;

    const rendererFactory = (typeof children === 'string') ?
      getInnerHtmlRenderer : getChildrenRenderer;

    return rendererFactory('mj-raw')(handleMjmlProps(rest), children);
  }

}

import React, { Component } from 'react';
import { string } from 'prop-types';

export class MjmlHtml extends Component {
  static propTypes = {
    tag: string,
    html: string.isRequired,
  };

  render() {
    const { tag, html } = this.props;
    return React.createElement(tag || 'mj-raw', {
      dangerouslySetInnerHTML: {
        __html: html,
      },
    });
  }
}

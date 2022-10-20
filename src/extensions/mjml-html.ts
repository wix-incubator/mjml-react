import React, { Component } from "react";

interface IMjmlHtml {
  tag?: string;
  html: string;
}

export class MjmlHtml extends Component<IMjmlHtml> {
  render() {
    const { tag = "mj-raw", html } = this.props;
    return React.createElement(tag, {
      dangerouslySetInnerHTML: {
        __html: html,
      },
    });
  }
}

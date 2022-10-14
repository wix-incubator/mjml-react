import React, { Component } from "react";

export class MjmlHtml extends Component {
  render() {
    const { tag, html } = this.props;
    return React.createElement(tag || "mj-raw", {
      dangerouslySetInnerHTML: {
        __html: html,
      },
    });
  }
}

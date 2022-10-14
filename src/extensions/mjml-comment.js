import React, { Component } from "react";

import { handleMjmlProps } from "../utils";

export class MjmlComment extends Component {
  render() {
    const { children, ...rest } = this.props;
    if (children && children.trim().length) {
      return React.createElement("mj-raw", {
        ...handleMjmlProps(rest),
        dangerouslySetInnerHTML: {
          __html: `<!--${children}-->`,
        },
      });
    }
    return null;
  }
}

import React, { Component } from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export class MjmlComment extends Component {
  render() {
    const { children, ...rest } = this.props;
    if (children && children.toString().trim().length) {
      return React.createElement("mj-raw", {
        ...convertPropsToMjmlAttributes(rest),
        dangerouslySetInnerHTML: {
          __html: `<!--${children}-->`,
        },
      });
    }
    return null;
  }
}

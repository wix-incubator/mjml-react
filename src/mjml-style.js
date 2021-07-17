import React, { Component } from "react";

import { handleMjmlProps } from "./utils";

export class MjmlStyle extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement("mj-style", {
      ...handleMjmlProps(rest),
      dangerouslySetInnerHTML: { __html: children },
    });
  }
}

import React, { Component } from "react";

import { handleMjmlProps } from "./utils";

export class MjmlAttributes extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement(
      "mj-attributes",
      handleMjmlProps(rest),
      children
    );
  }
}

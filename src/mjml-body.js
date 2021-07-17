import React, { Component } from "react";

import { handleMjmlProps } from "./utils";

export class MjmlBody extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement("mj-body", handleMjmlProps(rest), children);
  }
}

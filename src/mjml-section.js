import React, { Component } from "react";

import { handleMjmlProps } from "./utils";

export class MjmlSection extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement("mj-section", handleMjmlProps(rest), children);
  }
}

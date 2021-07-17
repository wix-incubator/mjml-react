import React, { Component } from "react";

import { handleMjmlProps } from "./utils";

export class MjmlButton extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement("mj-button", handleMjmlProps(rest), children);
  }
}

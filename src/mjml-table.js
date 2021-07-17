import React, { Component } from "react";

import { handleMjmlProps } from "./utils";

export class MjmlTable extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement("mj-table", handleMjmlProps(rest), children);
  }
}

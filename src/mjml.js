import React, { Component } from "react";

import { handleMjmlProps } from "./utils";

export class Mjml extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement("mjml", handleMjmlProps(rest), children);
  }
}

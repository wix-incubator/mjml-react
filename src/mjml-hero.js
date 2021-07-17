import React, { Component } from "react";

import { handleMjmlProps } from "./utils";

export class MjmlHero extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement("mj-hero", handleMjmlProps(rest), children);
  }
}

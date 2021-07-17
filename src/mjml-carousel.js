import React, { Component } from "react";

import { handleMjmlProps } from "./utils";

export class MjmlCarousel extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement("mj-carousel", handleMjmlProps(rest), children);
  }
}

import React, { Component } from "react";

import { handleMjmlProps } from "./utils";

export class MjmlAccordionElement extends Component {
  render() {
    const { children, ...rest } = this.props;
    return React.createElement(
      "mj-accordion-element",
      handleMjmlProps(rest),
      children
    );
  }
}

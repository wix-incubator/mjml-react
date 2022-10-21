import React, { Component } from "react";

import { MjmlRaw } from "..";

interface IMjmlTrackingPixel {
  src: string;
}

export class MjmlTrackingPixel extends Component<IMjmlTrackingPixel> {
  render() {
    const { src } = this.props;
    const trackingPixelStyle = {
      display: "table",
      height: "1px!important",
      width: "1px!important",
      border: "0!important",
      margin: "0!important",
      padding: "0!important",
    };
    return (
      <MjmlRaw>
        <img src={src} style={trackingPixelStyle} width={1} height={1} />
      </MjmlRaw>
    );
  }
}

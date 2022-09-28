import React, { Component } from 'react';

import { MjmlRaw } from '../mjml-raw';

export class MjmlTrackingPixel extends Component {
  render() {
    const { src } = this.props;
    const trackingPixelStyle = {
      display: 'table',
      height: '1px!important',
      width: '1px!important',
      border: '0!important',
      margin: '0!important',
      padding: '0!important',
    };
    return (
      <MjmlRaw>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          src={src}
          style={trackingPixelStyle}
          width={1}
          height={1}
          border={0}
        />
      </MjmlRaw>
    );
  }
}

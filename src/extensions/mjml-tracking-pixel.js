import React, {Component} from 'react';
import {string} from 'prop-types';

import {MjmlRaw} from '../mjml-raw';

export class MjmlTrackingPixel extends Component {
  static propTypes = {
    src: string.isRequired
  }

  render() {
    const {src} = this.props;
    const trackingPixelStyle = {
      display: 'table',
      height: '1px!important',
      width: '1px!important',
      border: '0!important',
      margin: '0!important',
      padding: '0!important'
    };
    return <MjmlRaw><img src={src} style={trackingPixelStyle} width={1} height={1} border={0}/></MjmlRaw>;
  }
}

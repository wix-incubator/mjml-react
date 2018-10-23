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
      height: '1px!important',
      width: '1px!important',
      borderWidth: '0!important',
      marginTop: '0!important',
      marginBottom: '0!important',
      marginRight: '0!important',
      marginLeft: '0!important',
      paddingTop: '0!important',
      paddingBottom: '0!important',
      paddingRight: '0!important',
      paddingLeft: '0!important'
    };
    return <MjmlRaw><img src={src} style={trackingPixelStyle} width={1} height={1}/></MjmlRaw>;
  }
}

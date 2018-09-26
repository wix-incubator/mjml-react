import React, {Component} from 'react';
import {string} from 'prop-types';

import {MjmlRaw} from '../mjml-raw';

export class MjmlYahooStyle extends Component {

  static propTypes = {
    children: string.isRequired
  }

  render() {
    const {children, ...rest} = this.props;
    if (children && children.trim().length) {
      return (
        <MjmlRaw {...rest}>
          <style>{`@media screen yahoo {${children}}`}</style>
        </MjmlRaw>
      );
    }
    return null;
  }

}

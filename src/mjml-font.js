import React, {Component} from 'react';
import {string} from 'prop-types';

export class MjmlFont extends Component {

  static propTypes = {
    href: string.isRequired,
    name: string.isRequired
  }

  render() {
    const {href, name} = this.props;
    return React.createElement('mj-head', {
      href,
      name
    }, null);
  }

}

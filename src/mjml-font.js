import React, {Component} from 'react';
import {string} from 'prop-types';

export class MjmlFont extends Component {

  static propTypes = {
    href: string.isRequired,
    name: string.isRequired
  }

  render() {
    const {name, href} = this.props;
    return React.createElement('mj-font', {
      name,
      href
    }, null);
  }

}

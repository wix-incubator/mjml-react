import React, {Component} from 'react';
import {string, bool} from 'prop-types';

export class MjmlStyle extends Component {

  static propTypes = {
    children: string.isRequired,
    inline: bool.isRequired
  }

  static defaultProps = {
    inline: false
  }

  render() {
    return React.createElement('mj-style', {
      'inline': this.props.inline ? 'inline' : ''
    }, this.props.children);
  }

}

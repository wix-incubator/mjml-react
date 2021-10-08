import React from 'react';
import { handleMjmlProps } from '../utils.js';

export function createElement(name, rest, children) {
  return Array.isArray(children)
    ? React.createElement(name, handleMjmlProps(rest), ...children)
    : React.createElement(name, handleMjmlProps(rest), children);
}

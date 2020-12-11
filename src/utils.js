const Color = require('color');

const handlers = {
  inline: boolToString,
  'full-width': boolToString,
  width: numberToPx,
  height: numberToPx,
  'border-radius': numberToPx,
  'border-width': numberToPx,
  'background-size': numberToPx,
  padding: numberToPx,
  'padding-top': numberToPx,
  'padding-right': numberToPx,
  'padding-bottom': numberToPx,
  'padding-left': numberToPx,
  'font-size': numberToPx,
  'letter-spacing': numberToPx,
  'line-height': numberToPx,
  'icon-padding': numberToPx,
  'text-padding': numberToPx,
  color: colorToHex,
  'border-color': colorToHex,
  'background-color': colorToHex,
  'container-background-color': colorToHex,
  'inner-background-color': colorToHex,
};

export function handleMjmlProps(props) {
  return Object.keys(props).reduce((acc, curr) => {
    const mjmlProp = kebabCase(curr);
    return {
      ...acc,
      [mjmlProp]: handleMjmlProp(mjmlProp, props[curr]),
    };
  }, {});
}

function handleMjmlProp(name, value) {
  if (typeof value === 'undefined' || value === null) {
    return undefined;
  }
  const handler = handlers[name] || ((_name, value_) => value_);
  return handler(name, value);
}

function kebabCase(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function boolToString(name, value) {
  return value ? name : undefined;
}

function numberToPx(name, value) {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
}

export function colorToHex(name, value) {
  if (!value) {
    return '';
  }
  let c;
  try {
    c = Color(value);
  } catch (e) {
    return '';
  }
  return c.hex();
}
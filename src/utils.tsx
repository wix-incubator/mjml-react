import Color from "color";

const handlers: { [key: string]: (name: string, value: any) => any } = {
  inline: boolToString,
  "full-width": boolToString,
  width: numberToPx,
  height: numberToPx,
  "border-radius": numberToPx,
  "border-width": numberToPx,
  "background-size": numberToPx,
  padding: numberToPx,
  "padding-top": numberToPx,
  "padding-right": numberToPx,
  "padding-bottom": numberToPx,
  "padding-left": numberToPx,
  "font-size": numberToPx,
  "letter-spacing": numberToPx,
  "line-height": numberToPx,
  "icon-padding": numberToPx,
  "text-padding": numberToPx,
  color: handleColor,
  "border-color": handleColor,
  "background-color": handleColor,
  "container-background-color": handleColor,
  "inner-background-color": handleColor,
};

export function handleMjmlProps(props: any) {
  return Object.keys(props).reduce((acc, curr) => {
    const mjmlProp = kebabCase(curr);
    return {
      ...acc,
      [mjmlProp]: handleMjmlProp(mjmlProp, props[curr]),
    };
  }, {});
}

function handleMjmlProp(name: string, value?: string | null) {
  if (typeof value === "undefined" || value === null) {
    return undefined;
  }
  const handler = handlers[name] || ((_name, value_) => value_);
  return handler(name, value);
}

function kebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function boolToString(name: string, value: boolean) {
  return value ? name : undefined;
}

function numberToPx(name: string, value: string | number) {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
}

function handleColor(name: string, value: string) {
  const color = parseColor(value);
  if (color) {
    if (value[0] === "#" && value.length === 9) {
      const alpha = color.alpha().toFixed(2);
      // @ts-expect-error
      return color.rgb().alpha(alpha).toString();
    }
    return value;
  }
  return "";
}

function parseColor(value: string) {
  try {
    return new Color(value);
  } catch (e) {}
  return null;
}

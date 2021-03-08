import classNames from "classnames";
import { kebabCase } from "lodash";
import React from "react";

export function mjmlReactComponentFactory<P>(mjmlElementName: string): React.FC<P> {
  return ({ children, ...props }) => {
    return React.createElement(mjmlElementName, convertPropsToMjmlAttributes(props), children);
  };
}

export function convertPropsToMjmlAttributes<P>(props: { [K in keyof P]: unknown }) {
  const mjmlProps = Object.entries(props).reduce((mjmlProps, [prop, value]) => {
    const mjmlProp = kebabCase(prop);
    const mjmlValue = convertPropValueToMjml(mjmlProp, value);

    if (mjmlValue === undefined || prop === "className") {
      return mjmlProps;
    }
    mjmlProps[mjmlProp] = mjmlValue;
    return mjmlProps;
  }, {} as Record<string, string>);

  // className is a special prop used extensively in react in place of the html class attribute.
  // mjml uses a different name (css-class) for the same thing.
  const className = (props as any).className;
  if (typeof className === "string") {
    mjmlProps["css-class"] = classNames(mjmlProps["css-class"], className);
  }

  return mjmlProps;
}

const booleanToString = ["inline", "full-width"];
const numberToPixel = [
  "width",
  "height",
  "border-radius",
  "border-width",
  "background-size",
  "padding",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "padding-left",
  "font-size",
  "letter-spacing",
  "line-height",
  "icon-padding",
  "text-padding",
];

function convertPropValueToMjml(name: string, value: unknown): string | undefined {
  // This assumes that all numbers will be pixels which might not always be the case
  if (typeof value === "number" && numberToPixel.includes(name)) {
    return `${value}px`;
  }
  if (typeof value === "boolean" && booleanToString.includes(name)) {
    return name;
  }
  if (typeof value === "string") {
    return value;
  }
}

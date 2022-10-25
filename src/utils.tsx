import kebabCase from "lodash.kebabcase";

const DANGEROUSLY_SET_INNER_HTML = "dangerouslySetInnerHTML";

export type Matrix<E extends string | number> =
  | E
  | `${E} ${E}`
  | `${E} ${E} ${E}`
  | `${E} ${E} ${E} ${E}`;

export type Pixel = number | `${number}` | `${number}px`;
export type Percentage = number | `${number}` | `${number}%`;
export type Ephemeral = number | `${number}` | `${number}em`;
export const typeToUnit = { Pixel: "px", Percentage: "%", Ephemeral: "em" };

type MJMLDangerouslySetInnerHTML = {
  __html: string;
};

export function convertPropsToMjmlAttributes<P>(props: {
  [K in keyof P]: unknown;
}) {
  const mjmlProps = Object.entries(props).reduce((mjmlProps, [prop, value]) => {
    const mjmlProp =
      prop === DANGEROUSLY_SET_INNER_HTML ? prop : kebabCase(prop);
    const mjmlValue = convertPropValueToMjml(mjmlProp, value);

    if (mjmlValue === undefined || prop === "className") {
      return mjmlProps;
    }
    if (prop === "mjmlClass") {
      mjmlProps["mj-class"] = mjmlValue;
    } else {
      mjmlProps[mjmlProp] = mjmlValue;
    }
    return mjmlProps;
  }, {} as Record<string, string | MJMLDangerouslySetInnerHTML>);

  // className is a special prop used extensively in react in place of the html class attribute.
  // mjml uses a different name (css-class) for the same thing.
  const className = (props as any).className;
  if (typeof className === "string") {
    mjmlProps["css-class"] =
      typeof mjmlProps["css-class"] === "string"
        ? joinClassNames(mjmlProps["css-class"], className)
        : className;
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

const allowObject = [DANGEROUSLY_SET_INNER_HTML];

function convertPropValueToMjml(
  name: string,
  value: unknown
): string | MJMLDangerouslySetInnerHTML | undefined {
  // This assumes that all numbers will be pixels which might not always be the case
  if (typeof value === "number" && numberToPixel.includes(name)) {
    return `${value}px`;
  }
  if (typeof value === "boolean" && booleanToString.includes(name)) {
    return name;
  }
  if (typeof value === "object" && allowObject.includes(name)) {
    return value as MJMLDangerouslySetInnerHTML;
  }
  if (typeof value === "string") {
    return value;
  }
  return;
}

function joinClassNames(...classNames: string[]) {
  return classNames.join(" ").trim();
}

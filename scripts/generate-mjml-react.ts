#!/usr/bin/env ts-node

/**
 * Generate the mjml components
 *
 * usage `node --require ts-node/register scripts/generate-mjml-react.ts`
 */
import * as del from "del";
import * as fs from "fs";
import camelCase from "lodash.camelcase";
import upperFirst from "lodash.upperfirst";
import * as path from "path";

const MJML_REACT_DIR = "src";

const GENERATED_HEADER_TSX = `
/*
 * This file is generated. Don't edit it directly.
 * Modify \`scripts/generate-mjml-react.ts\` to make changes to these files
 */
`;

interface IMjmlComponent {
  componentName: string;
  allowedAttributes?: Record<string, string>;
  defaultAttributes?: Record<string, string>;
  endingTag?: true;
}

const PRESET_CORE_COMPONENTS: Array<IMjmlComponent> =
  require("mjml-preset-core").components;
const OTHER_SUPPORTED_COMPONENTS = ["mjml", "mj-all", "mj-class", "mj-include"];

const MJML_COMPONENTS_TO_GENERATE = [
  ...OTHER_SUPPORTED_COMPONENTS.map(
    (componentName) => ({ componentName } as IMjmlComponent)
  ),
  ...PRESET_CORE_COMPONENTS,
];

const MJML_COMPONENT_NAMES = MJML_COMPONENTS_TO_GENERATE.map(
  (component) => component.componentName
);

const ATTRIBUTES_TO_USE_CSSProperties_WITH = new Set([
  "color",
  "textAlign",
  "verticalAlign",
  "textDecoration",
  "textTransform",

  "border",
  "borderRadius",
  "borderColor",
  "borderStyle",

  "backgroundColor",
  "backgroundPosition",
  "backgroundRepeat",
  "backgroundSize",
]);

const HAS_CSS_CLASS = new Set(
  MJML_COMPONENT_NAMES.filter(
    (element) =>
      !["mjml", "mj-style", "mj-class", "mj-breakpoint", "mj-include"].includes(
        element
      )
  )
);

const HAS_CHILDREN = new Set(
  MJML_COMPONENT_NAMES.filter(
    (element) =>
      ![
        "mj-all",
        "mj-include",
        "mj-breakpoint",
        "mj-class",
        "mj-divider",
        "mj-image",
        "mj-spacer",
      ].includes(element)
  )
);

const ALLOW_ANY_PROPERTY = new Set(
  MJML_COMPONENT_NAMES.filter((element) =>
    ["mj-class", "mj-all"].includes(element)
  )
);

function getPropTypeFromMjmlAttributeType(
  attribute: string,
  mjmlAttributeType: string
) {
  if (attribute === "fullWidth") {
    return "boolean";
  }
  if (ATTRIBUTES_TO_USE_CSSProperties_WITH.has(attribute)) {
    return `React.CSSProperties["${attribute}"]`;
  }
  if (
    mjmlAttributeType.startsWith("unit") &&
    mjmlAttributeType.includes("px")
  ) {
    return "string | number";
  }
  if (mjmlAttributeType === "boolean") {
    return "boolean";
  }
  if (mjmlAttributeType === "integer") {
    return "number";
  }
  // e.g. "vertical-align": "enum(top,bottom,middle)"
  if (mjmlAttributeType.startsWith("enum")) {
    return (
      mjmlAttributeType
        .match(/\(.*\)/)?.[0]
        ?.slice(1, -1)
        .split(",")
        .map((str) => "'" + str + "'")
        .join(" | ") ?? "unknown"
    );
  }
  return "string";
}

function buildTypesForComponent(mjmlComponent: IMjmlComponent): string {
  const { componentName, allowedAttributes } = mjmlComponent;
  const typesFromMjmlAttributes: Record<string, string> = {};
  if (allowedAttributes) {
    Object.entries(allowedAttributes).forEach(
      ([mjmlAttribute, mjmlAttributeType]) => {
        const attribute = camelCase(mjmlAttribute);
        typesFromMjmlAttributes[attribute] = getPropTypeFromMjmlAttributeType(
          attribute,
          mjmlAttributeType
        );
      }
    );
  }

  if (componentName === "mjml") {
    typesFromMjmlAttributes["owa"] = "string";
    typesFromMjmlAttributes["lang"] = "string";
  } else if (componentName === "mj-style") {
    typesFromMjmlAttributes["inline"] = "boolean";
  } else if (componentName === "mj-class") {
    typesFromMjmlAttributes["name"] = "string";
  } else if (componentName === "mj-table") {
    typesFromMjmlAttributes["cellspacing"] = "string";
    typesFromMjmlAttributes["cellpadding"] = "string";
  } else if (componentName === "mj-include") {
    typesFromMjmlAttributes["path"] = "string";
  } else if (componentName === "mj-breakpoint") {
    typesFromMjmlAttributes["width"] = "string";
  }

  if (HAS_CSS_CLASS.has(componentName)) {
    typesFromMjmlAttributes["className"] = "string";
    typesFromMjmlAttributes["cssClass"] = "string";
    typesFromMjmlAttributes["mjmlClass"] = "string";
  }
  if (HAS_CHILDREN.has(componentName)) {
    typesFromMjmlAttributes["children"] = "React.ReactNode";
  }

  const typeStrings = Object.entries(typesFromMjmlAttributes).map(
    ([attributes, type]) => `${attributes}?: ${type}`
  );

  // allow any property
  if (ALLOW_ANY_PROPERTY.has(componentName)) {
    typeStrings.push("[prop: string]: string | undefined;");
  }

  return typeStrings.join("\n");
}

function buildFileContents({
  componentName,
  types,
  reactName,
}: {
  componentName: string;
  types: string;
  reactName: string;
}) {
  const { props, createElementProps } =
    buildReactCreateElementProps(componentName);
  return `
${GENERATED_HEADER_TSX}

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface I${reactName}Props {
  ${types}
}

export function ${reactName}(${props}: I${reactName}Props): JSX.Element {
  return React.createElement("${componentName}", ${createElementProps});
};
`;
}

function buildReactCreateElementProps(componentName: string): {
  props: string;
  createElementProps: string;
} {
  const withChildren = "{children, ...props}";
  const withoutChildren = "props";

  if (componentName === "mj-style") {
    return {
      props: withChildren,
      createElementProps:
        "{ ...convertPropsToMjmlAttributes(props), dangerouslySetInnerHTML: { __html: children } }",
    };
  }
  if (HAS_CHILDREN.has(componentName)) {
    return {
      props: withChildren,
      createElementProps: "convertPropsToMjmlAttributes(props), children",
    };
  }
  return {
    props: withoutChildren,
    createElementProps: "convertPropsToMjmlAttributes(props)",
  };
}

// reset directory
const GENERATED_MJML_FILES = path.join(MJML_REACT_DIR, "mjml");
del.sync(GENERATED_MJML_FILES);
fs.mkdirSync(GENERATED_MJML_FILES);

// create mjml-react components
for (const mjmlComponent of MJML_COMPONENTS_TO_GENERATE) {
  const { componentName } = mjmlComponent;
  const mjmlPackageName = componentName.replace("mj-", "mjml-");
  const reactName = upperFirst(camelCase(mjmlPackageName));

  const types = buildTypesForComponent(mjmlComponent);
  const fileContents = buildFileContents({ componentName, reactName, types });

  fs.writeFileSync(
    path.join(GENERATED_MJML_FILES, `${reactName}.tsx`),
    fileContents
  );
}

// create index export file for mjml-react components
const INDEX_FILE = path.join(MJML_REACT_DIR, `index.tsx`);
fs.writeFileSync(
  INDEX_FILE,
  `
${GENERATED_HEADER_TSX}

${MJML_COMPONENTS_TO_GENERATE.map(({ componentName }) => {
  const mjmlPackageName = componentName.replace("mj-", "mjml-");
  const reactName = upperFirst(camelCase(mjmlPackageName));
  return `export { ${reactName} } from './mjml/${reactName}';
export type { I${reactName}Props } from './mjml/${reactName}';`;
}).join("\n")}
`
);

// generate gitattributes file
const gitAttributes = MJML_COMPONENTS_TO_GENERATE.map(({ componentName }) => {
  const mjmlPackageName = componentName.replace("mj-", "mjml-");
  const reactName = upperFirst(camelCase(mjmlPackageName));
  return `${reactName}.tsx  linguist-generated`;
}).join("\n");

const gitAttributesFile = path.join(MJML_REACT_DIR, ".gitattributes");
fs.writeFileSync(
  gitAttributesFile,
  `# AUTOGENERATED, DO NOT EDIT.
.gitAttributes linguist-generated
${gitAttributes}
`
);

require("child_process").execSync(
  `yarn prettier --write ${GENERATED_MJML_FILES} ${INDEX_FILE}`
);

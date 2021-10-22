#!/usr/bin/env ts-node

/**
 * Generate the mjml components
 *
 * usage `node --require ts-node/register scripts/generate-mjml-react.ts`
 */

import * as del from "del";
import * as fs from "fs";
import { camelCase, upperFirst } from "lodash";
import * as path from "path";

import { MJML_REACT_DIR } from "../config/paths";

const GENERATED_HEADER_TSX = `
/*
 * This file is generated. Don't edit it directly.
 * Modify \`scripts/generate-mjml-react.ts\` to make changes to these files
 */
`;

const MJML_ELEMENTS_TO_CONVERT = [
  "mjml",
  "mj-all",
  "mj-include",
  "mj-attributes",
  "mj-body",
  "mj-breakpoint",
  "mj-button",
  "mj-class",
  "mj-column",
  "mj-divider",
  "mj-group",
  "mj-head",
  "mj-image",
  "mj-preview",
  "mj-raw",
  "mj-section",
  "mj-spacer",
  "mj-style",
  "mj-table",
  "mj-text",
  "mj-title",
  "mj-wrapper",
  "mj-hero",
];

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
  MJML_ELEMENTS_TO_CONVERT.filter(
    (element) =>
      !["mjml", "mj-style", "mj-class", "mj-breakpoint", "mj-include"].includes(
        element
      )
  )
);

const HAS_CHILDREN = new Set(
  MJML_ELEMENTS_TO_CONVERT.filter(
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
        .slice(1, -1)
        .split(",")
        .map((str) => "'" + str + "'")
        .join(" | ") ?? "unknown"
    );
  }
  return "string";
}

function buildTypesForComponent(mjmlElementName: string): string {
  const typesFromMjmlAttributes: Record<string, string> = {};
  try {
    const mjmlPackageName = mjmlElementName.replace("mj-", "mjml-");
    const mjmlElementAttributeTypes = require(mjmlPackageName)
      .allowedAttributes as Record<string, string>;
    if (mjmlElementAttributeTypes) {
      Object.entries(mjmlElementAttributeTypes).forEach(
        ([mjmlAttribute, mjmlAttributeType]) => {
          const attribute = camelCase(mjmlAttribute);
          typesFromMjmlAttributes[attribute] = getPropTypeFromMjmlAttributeType(
            attribute,
            mjmlAttributeType
          );
        }
      );
    }
  } catch (_) {
    /* not all elements have packages */
  }

  if (mjmlElementName === "mjml") {
    typesFromMjmlAttributes["owa"] = "string";
    typesFromMjmlAttributes["lang"] = "string";
  } else if (mjmlElementName === "mj-style") {
    typesFromMjmlAttributes["inline"] = "boolean";
  } else if (mjmlElementName === "mj-class") {
    typesFromMjmlAttributes["name"] = "string";
  } else if (mjmlElementName === "mj-table") {
    typesFromMjmlAttributes["cellspacing"] = "string";
    typesFromMjmlAttributes["cellpadding"] = "string";
  } else if (mjmlElementName === "mj-include") {
    typesFromMjmlAttributes["path"] = "string";
  } else if (mjmlElementName === "mj-breakpoint") {
    typesFromMjmlAttributes["width"] = "string";
  }

  if (HAS_CSS_CLASS.has(mjmlElementName)) {
    typesFromMjmlAttributes["className"] = "string";
    typesFromMjmlAttributes["cssClass"] = "string";
    typesFromMjmlAttributes["mjmlClass"] = "string";
  }
  if (HAS_CHILDREN.has(mjmlElementName)) {
    typesFromMjmlAttributes["children"] = "React.ReactNode";
  }

  const typeStrings = Object.entries(typesFromMjmlAttributes).map(
    ([attributes, type]) => `${attributes}?: ${type}`
  );

  // allow any property
  if (["mj-class", "mj-all"].includes(mjmlElementName)) {
    typeStrings.push("[prop: string]: string | undefined;");
  }

  return typeStrings.join("\n");
}

function buildFileContents({
  mjmlElementName,
  types,
  reactName,
}: {
  mjmlElementName: string;
  types: string;
  reactName: string;
}) {
  const { props, createElementProps } = buildReactCreateElementProps(
    mjmlElementName
  );
  return `
${GENERATED_HEADER_TSX}

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface I${reactName}Props {
  ${types}
}

export function ${reactName}(${props}: I${reactName}Props): JSX.Element {
  return React.createElement("${mjmlElementName}", ${createElementProps});
};
`;
}

function buildReactCreateElementProps(
  mjmlElementName: string
): { props: string; createElementProps: string } {
  const withChildren = "{children, ...props}";
  const withoutChildren = "props";

  if (mjmlElementName === "mj-style") {
    return {
      props: withChildren,
      createElementProps:
        "{ ...convertPropsToMjmlAttributes(props), dangerouslySetInnerHTML: { __html: children } }",
    };
  }
  if (HAS_CHILDREN.has(mjmlElementName)) {
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
for (const mjmlElementName of MJML_ELEMENTS_TO_CONVERT) {
  const mjmlPackageName = mjmlElementName.replace("mj-", "mjml-");
  const reactName = upperFirst(camelCase(mjmlPackageName));

  const types = buildTypesForComponent(mjmlElementName);
  const fileContents = buildFileContents({ mjmlElementName, reactName, types });

  fs.writeFileSync(
    path.join(GENERATED_MJML_FILES, `${reactName}.tsx`),
    fileContents
  );
}

// create index export file for mjml-react components
fs.writeFileSync(
  path.join(MJML_REACT_DIR, `index.tsx`),
  `
${GENERATED_HEADER_TSX}
/* eslint-disable @faire/no-re-exports */

${MJML_ELEMENTS_TO_CONVERT.map((mjmlElementName) => {
  const mjmlPackageName = mjmlElementName.replace("mj-", "mjml-");
  const reactName = upperFirst(camelCase(mjmlPackageName));
  return `export { ${reactName}, I${reactName}Props } from './mjml/${reactName}';`;
}).join("\n")}
`
);

// generate gitattributes file
const gitAttributes = MJML_ELEMENTS_TO_CONVERT.map((mjmlElementName) => {
  const mjmlPackageName = mjmlElementName.replace("mj-", "mjml-");
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

require("child_process").execSync(`yarn prettier --write ${MJML_REACT_DIR}`);

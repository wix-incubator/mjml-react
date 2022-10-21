import { minify as htmlMinify } from "html-minifier";
import mjml2html from "mjml";
import { MJMLParsingOptions, MJMLJsonObject, MJMLParseError } from "mjml-core";
import React from "react";

import { renderToMjml } from "./renderToMjml";

interface ConvertedHtml {
  html: string;
  json?: MJMLJsonObject;
  errors?: MJMLParseError[];
}

export function render(
  email: React.ReactElement,
  options: MJMLParsingOptions = {}
): ConvertedHtml {
  const defaults: MJMLParsingOptions = {
    keepComments: false,
    beautify: false,
    validationLevel: "strict",
  };

  const parseResults: ConvertedHtml = mjml2html(renderToMjml(email), {
    ...defaults,
    ...options,
    minify: undefined,
  });

  if (options.minify) {
    return {
      html: htmlMinify(parseResults.html, {
        caseSensitive: true,
        collapseWhitespace: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true,
      }),
    };
  }

  return parseResults;
}

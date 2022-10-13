import { minify as htmlMinify } from "html-minifier";
import mjml2html from "mjml";
import { MJMLParsingOptions } from "mjml-core";
import React from "react";

import { renderToMjml } from "./renderToMjml";

export function render(
  email: React.ReactElement,
  options: MJMLParsingOptions = {}
) {
  const defaults: MJMLParsingOptions = {
    keepComments: false,
    beautify: false,
    validationLevel: "strict",
  };

  const html = mjml2html(renderToMjml(email), {
    ...defaults,
    ...options,
    minify: undefined,
  });

  if (options.minify) {
    return {
      html: htmlMinify(html.html, {
        caseSensitive: true,
        collapseWhitespace: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true,
      }),
    };
  }

  return html;
}

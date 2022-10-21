import React from "react";
import ReactDOMServer from "react-dom/server";

export function renderToMjml(email: React.ReactElement): string {
  return ReactDOMServer.renderToStaticMarkup(email);
}

import React from "react";
import ReactDOMServer from "react-dom/server";

export function renderToMjml(email: React.ReactElement) {
  return ReactDOMServer.renderToStaticMarkup(email);
}

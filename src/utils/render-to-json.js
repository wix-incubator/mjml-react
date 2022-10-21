/* eslint-disable curly */
import React from "react";
import ReactDOMServer from "react-dom/server";
import ReactReconciler from "react-reconciler";

import { noop, escapeTextForBrowser, trimContent } from "./render-utils";

const reconciler = ReactReconciler({
  supportsMutation: true,
  isPrimaryRenderer: true,
  createTextInstance(
    text /* rootContainerInstance, hostContext, internalInstanceHandle,*/
  ) {
    return text;
  },
  createInstance(type, props /* rootContainerInstance, hostContext */) {
    const { children, dangerouslySetInnerHTML, ...rest } = props;
    const res = {
      tagName: type,
      attributes: rest,
    };
    Object.keys(res.attributes).forEach((key) => {
      const attrKey = res.attributes[key];
      if (attrKey === undefined) {
        delete res.attributes[key];
      }
      if (typeof attrKey === "string") {
        res.attributes[key] = escapeTextForBrowser(attrKey);
      }
    });
    if (!type.startsWith("mj")) {
      return {
        type,
        props,
        children: [],
        isReact: true,
      };
    }

    if (props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html) {
      // using replace to prevent issue with $ sign in MJML
      // https://github.com/mjmlio/mjml2json#L145
      res.content = props.dangerouslySetInnerHTML.__html.replace("$", "&#36;");
    }
    return res;
  },
  appendChildToContainer(container, child) {
    trimContent(child);
    container.resultObj = child;
  },
  appendInitialChild(parent, child) {
    if (child.isReact) {
      if (parent.isReact) {
        parent.children.push(child);
      } else {
        const reactElement = toReactElement(child);
        if (!parent.content) {
          parent.content = "";
        }
        parent.content += ReactDOMServer.renderToStaticMarkup(reactElement);
      }
    } else if (typeof child === "string") {
      if (!child) return;
      if (parent.isReact) {
        parent.children.push(child);
      } else {
        if (!parent.content) {
          parent.content = "";
        }
        parent.content += escapeTextForBrowser(child);
      }
    } else {
      if (!parent.children) parent.children = [];
      parent.children.push(child);
    }
  },
  prepareForCommit: noop,
  resetAfterCommit: noop,
  clearContainer: noop,
  appendChild: noop,
  finalizeInitialChildren: noop,
  getChildHostContext: noop,
  getRootHostContext: noop,
  shouldSetTextContent: noop,
});

export function renderToJSON(whatToRender) {
  const container = reconciler.createContainer({}, false, false);
  reconciler.updateContainer(whatToRender, container, null, null);
  return container.containerInfo.resultObj;
}

function toReactElement(element) {
  if (element.children.length === 0) {
    return React.createElement(element.type, element.props);
  }
  return React.createElement(
    element.type,
    element.props,
    element.children.map((child) =>
      typeof child === "string" ? child : toReactElement(child)
    )
  );
}

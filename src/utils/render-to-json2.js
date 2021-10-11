import React from 'react';
import ReactReconciler from 'react-reconciler';
import ReactDOMServer from 'react-dom/server';

import { noop, escapeTextForBrowser, trimContent } from './render-utils';

const reconciler = ReactReconciler({
  supportsMutation: true,
  createTextInstance(text) {
    return escapeTextForBrowser(text);
  },
  createInstance(type, props) {
    if (!type.startsWith('mj')) {
      return { isReact: true, type, props };
    }

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
      if (typeof attrKey === 'string') {
        res.attributes[key] = escapeTextForBrowser(attrKey);
      }
    });

    if (props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html) {
      // using replace to prevent issue with $ sign in MJML
      // https://github.com/mjmlio/mjml2json#L145
      res.content = props.dangerouslySetInnerHTML.__html.replace('$', '&#36;');
    }

    return res;
  },
  appendChildToContainer(container, child) {
    trimContent(child);
    container.result = child;
  },
  appendInitialChild(parent, child) {
    if (typeof parent === 'string' || parent.isReact) {
      return;
    }
    if (typeof child === 'string') {
      parent.content = (parent.content || '') + child;
    } else if (child.isReact) {
      const content = ReactDOMServer.renderToStaticMarkup(
        React.createElement(child.type, child.props),
      );
      parent.content = (parent.content || '') + content;
    } else {
      parent.children = (parent.children || []).concat(child);
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

export function renderToJSON2(whatToRender) {
  const container = reconciler.createContainer({}, false, false);
  reconciler.updateContainer(whatToRender, container, null, null);
  return container.containerInfo.result;
}

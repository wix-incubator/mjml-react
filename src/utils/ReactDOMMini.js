import React from 'react';
import ReactReconciler from 'react-reconciler';
import * as _ from 'lodash';
import ReactDOMServer from 'react-dom/server';

export { ReactDOMMini };

const toReactElement = (e) => {
  if (e.children.length === 0) {
    return React.createElement(e.type, e.props);
  }
  return React.createElement(
    e.type,
    e.props,
    e.children.map((c) => (typeof c === 'string' ? c : toReactElement(c)))
  );
};

const matchHtmlRegExp = /["'&<>]/;

function escapeHtml(string) {
  const str = '' + string;
  const match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  let escape;
  let html = '';
  let index;
  let lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 36: // $
        escape = '&#36;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}

function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    return '' + text;
  }
  return escapeHtml(text.trim());
}

let reconciler = ReactReconciler({
  supportsMutation: true,
  finalizeInitialChildren(element, type, props) {},
  getChildHostContext(parentContext, fiberType, rootInstance) {},
  getRootHostContext(rootInstance) {},
  shouldSetTextContent(type, props) {},
  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    return text;
  },
  createInstance(type, props, rootContainerInstance, hostContext) {
    const res = {
      tagName: type,
      attributes: _.omit(props, ['children', 'dangerouslySetInnerHTML']),
    };
    Object.keys(res.attributes).forEach((k) => {
      if (res.attributes[k] === undefined) delete res.attributes[k];
    });
    if (!type.startsWith('mj')) {
      return {
        type,
        props,
        children: [],
        isReact: true,
      };
    }

    if (props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html) {
      res.content = escapeTextForBrowser(props.dangerouslySetInnerHTML.__html);
    }
    return res;
  },
  clearContainer() {},
  appendChildToContainer(container, child) {
    container.resultObj = child;
  },
  appendChild(parent, child) {},
  appendInitialChild(parent, child) {
    if (child.isReact) {
      if (parent.isReact) {
        parent.children.push(child);
      } else {
        const reactElement = toReactElement(child);
        if (!parent.content) {
          parent.content = '';
        }
        parent.content += escapeTextForBrowser(
          ReactDOMServer.renderToStaticMarkup(reactElement)
        );
      }
    } else if (typeof child === 'string') {
      if (!child) return;
      if (parent.isReact) {
        parent.children.push(child);
      } else {
        if (!parent.content) {
          parent.content = '';
        }
        parent.content += escapeTextForBrowser(child);
      }
    } else {
      if (!parent.children) parent.children = [];
      parent.children.push(child);
    }
  },
  prepareForCommit(...args) {},
  resetAfterCommit(...args) {},
});

let ReactDOMMini = {
  render(whatToRender) {
    let container = reconciler.createContainer({}, false, false);
    reconciler.updateContainer(whatToRender, container, null, null);
    return container.containerInfo.resultObj;
  },
};

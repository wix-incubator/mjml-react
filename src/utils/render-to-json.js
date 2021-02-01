import React from 'react';
import ReactReconciler from 'react-reconciler';
import ReactDOMServer from 'react-dom/server';

const matchHtmlRegExp = /["'&<>]/;

const reconciler = ReactReconciler({
  supportsMutation: true,
  // eslint-disable-next-line no-unused-vars
  finalizeInitialChildren(element, type, props) {},
  // eslint-disable-next-line no-unused-vars
  getChildHostContext(parentContext, fiberType, rootInstance) {},
  // eslint-disable-next-line no-unused-vars
  getRootHostContext(rootInstance) {},
  // eslint-disable-next-line no-unused-vars
  shouldSetTextContent(type, props) {},
  createTextInstance(
    text,
    // eslint-disable-next-line no-unused-vars
    rootContainerInstance,
    // eslint-disable-next-line no-unused-vars
    hostContext,
    // eslint-disable-next-line no-unused-vars
    internalInstanceHandle,
  ) {
    return text;
  },
  // eslint-disable-next-line no-unused-vars
  createInstance(type, props, rootContainerInstance, hostContext) {
    const { children, dangerouslySetInnerHTML, ...rest } = props;
    const res = {
      tagName: type,
      attributes: rest,
    };
    Object.keys(res.attributes).forEach((key) => {
      if (res.attributes[key] === undefined) delete res.attributes[key];
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
  // eslint-disable-next-line no-unused-vars
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
        parent.content += ReactDOMServer.renderToStaticMarkup(reactElement);
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
  // eslint-disable-next-line no-unused-vars
  prepareForCommit(...args) {},
  // eslint-disable-next-line no-unused-vars
  resetAfterCommit(...args) {},
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
      typeof child === 'string' ? child : toReactElement(child),
    ),
  );
}

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

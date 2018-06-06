import ReactDOMServer from 'react-dom/server';
import mjml2html from 'mjml';

export {render};

export {Mjml} from './mjml';
export {MjmlHead} from './mjml-head';
export {MjmlBody} from './mjml-body';
export {MjmlBreakpoint} from './mjml-breakpoint';
export {MjmlFont} from './mjml-font';
export {MjmlPreview} from './mjml-preview';
export {MjmlStyle} from './mjml-style';
export {MjmlTitle} from './mjml-title';
export {MjmlRaw} from './mjml-raw';

function render(email, options = {}) {
  const html = ReactDOMServer.renderToStaticMarkup(email);
  const defaults = {
    keepComments: false,
    beautify: false,
    minify: true,
    validationLevel: 'strict'
  };
  return mjml2html(html, {...defaults, ...options});
}

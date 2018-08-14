import ReactDOMServer from 'react-dom/server';
import mjml2html from 'mjml';

export {render, renderToMjml};

export {Mjml} from './mjml';
export {MjmlAll} from './mjml-all';
export {MjmlAttributes} from './mjml-attributes';
export {MjmlBody} from './mjml-body';
export {MjmlBreakpoint} from './mjml-breakpoint';
export {MjmlButton} from './mjml-button';
export {MjmlClass} from './mjml-class';
export {MjmlColumn} from './mjml-column';
export {MjmlDivider} from './mjml-divider';
export {MjmlFont} from './mjml-font';
export {MjmlHead} from './mjml-head';
export {MjmlHero} from './mjml-hero';
export {MjmlImage} from './mjml-image';
export {MjmlPreview} from './mjml-preview';
export {MjmlRaw} from './mjml-raw';
export {MjmlSection} from './mjml-section';
export {MjmlSpacer} from './mjml-spacer';
export {MjmlStyle} from './mjml-style';
export {MjmlText} from './mjml-text';
export {MjmlTitle} from './mjml-title';
export {MjmlWrapper} from './mjml-wrapper';

function render(email, options = {}) {
  const defaults = {
    keepComments: false,
    beautify: false,
    minify: true,
    validationLevel: 'strict'
  };
  return mjml2html(renderToMjml(email), {...defaults, ...options});
}

function renderToMjml(email) {
  return ReactDOMServer.renderToStaticMarkup(email);
}

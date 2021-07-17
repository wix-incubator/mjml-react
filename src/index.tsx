import ReactDOMServer from "react-dom/server";

export { Mjml } from "./mjml";
export { MjmlAccordion } from "./mjml-accordion";
export { MjmlAccordionElement } from "./mjml-accordion-element";
export { MjmlAccordionText } from "./mjml-accordion-text";
export { MjmlAccordionTitle } from "./mjml-accordion-title";
export { MjmlAll } from "./mjml-all";
export { MjmlAttributes } from "./mjml-attributes";
export { MjmlBody } from "./mjml-body";
export { MjmlBreakpoint } from "./mjml-breakpoint";
export { MjmlButton } from "./mjml-button";
export { MjmlCarousel } from "./mjml-carousel";
export { MjmlCarouselImage } from "./mjml-carousel-image";
export { MjmlClass } from "./mjml-class";
export { MjmlColumn } from "./mjml-column";
export { MjmlDivider } from "./mjml-divider";
export { MjmlFont } from "./mjml-font";
export { MjmlGroup } from "./mjml-group";
export { MjmlHead } from "./mjml-head";
export { MjmlHero } from "./mjml-hero";
export { MjmlImage } from "./mjml-image";
export { MjmlNavbar } from "./mjml-navbar";
export { MjmlNavbarLink } from "./mjml-navbar-link";
export { MjmlPreview } from "./mjml-preview";
export { MjmlRaw } from "./mjml-raw";
export { MjmlSection } from "./mjml-section";
export { MjmlSocial } from "./mjml-social";
export { MjmlSocialElement } from "./mjml-social-element";
export { MjmlSpacer } from "./mjml-spacer";
export { MjmlStyle } from "./mjml-style";
export { MjmlTable } from "./mjml-table";
export { MjmlText } from "./mjml-text";
export { MjmlTitle } from "./mjml-title";
export { MjmlWrapper } from "./mjml-wrapper";

export function renderToMjml(email) {
  return ReactDOMServer.renderToStaticMarkup(email);
}

import React from "react";

import * as mjmlComponents from "../../src";

const {
  Mjml,
  MjmlAccordion,
  MjmlAccordionElement,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlBreakpoint,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlDivider,
  MjmlRaw,
  MjmlClass,
  MjmlText,
  MjmlHero,
  MjmlImage,
  MjmlSpacer,
  MjmlWrapper,
  MjmlCarousel,
  MjmlCarouselImage,
  MjmlAccordionText,
  MjmlAccordionTitle,
  MjmlFont,
  MjmlGroup,
  MjmlHead,
  MjmlHtmlAttributes,
  MjmlInclude,
  MjmlNavbar,
  MjmlNavbarLink,
  MjmlPreview,
  MjmlSocial,
  MjmlSocialElement,
  MjmlStyle,
  MjmlTable,
  MjmlTitle,
} = mjmlComponents;

type AllComponents = keyof typeof mjmlComponents;
type MjmlComponentTest = {
  mjmlReact: React.ReactElement;
  expectedMjml: string;
};

/**
 * Defining the MockComponentData type forces the mockMjmlReactTestData to
 * have at lease one test case for each Mjml component in src/mjml
 */
type MockComponentData = {
  [K in AllComponents]: Array<MjmlComponentTest>;
};
export const mockMjmlReactTestData: MockComponentData = {
  Mjml: [{ mjmlReact: <Mjml />, expectedMjml: "<mjml></mjml>" }],
  MjmlAccordion: [
    {
      mjmlReact: <MjmlAccordion />,
      expectedMjml: "<mj-accordion></mj-accordion>",
    },
  ],
  MjmlAccordionElement: [
    {
      mjmlReact: (
        <MjmlAccordion>
          <MjmlAccordionElement />
        </MjmlAccordion>
      ),
      expectedMjml:
        "<mj-accordion><mj-accordion-element></mj-accordion-element></mj-accordion>",
    },
  ],
  MjmlAccordionText: [
    {
      mjmlReact: (
        <MjmlAccordion>
          <MjmlAccordionText />
        </MjmlAccordion>
      ),
      expectedMjml: `<mj-accordion><mj-accordion-text></mj-accordion-text></mj-accordion>`,
    },
  ],
  MjmlAccordionTitle: [
    {
      mjmlReact: (
        <MjmlAccordion>
          <MjmlAccordionTitle />
        </MjmlAccordion>
      ),
      expectedMjml: `<mj-accordion><mj-accordion-title></mj-accordion-title></mj-accordion>`,
    },
  ],
  MjmlAll: [{ mjmlReact: <MjmlAll />, expectedMjml: "<mj-all></mj-all>" }],
  MjmlAttributes: [
    {
      mjmlReact: (
        <MjmlAttributes>
          <MjmlText padding={0}>Line Of Text</MjmlText>
          <MjmlClass name="white" color="white" />
          <MjmlAll padding="0" />
        </MjmlAttributes>
      ),
      expectedMjml: `<mj-attributes><mj-text padding="0px">Line Of Text</mj-text><mj-class name="white" color="white"></mj-class><mj-all padding="0"></mj-all></mj-attributes>`,
    },
  ],
  MjmlBody: [
    {
      mjmlReact: (
        <MjmlBody width={100} backgroundColor="blue" cssClass="body">
          Hello World!
        </MjmlBody>
      ),
      expectedMjml: `<mj-body width="100px" background-color="blue" css-class="body">Hello World!</mj-body>`,
    },
  ],
  MjmlBreakpoint: [
    {
      mjmlReact: <MjmlBreakpoint width="400px" />,
      expectedMjml: `<mj-breakpoint width="400px"></mj-breakpoint>`,
    },
  ],
  MjmlSection: [
    {
      mjmlReact: (
        <MjmlSection fullWidth paddingTop={10} cssClass="first-section">
          Content
        </MjmlSection>
      ),
      expectedMjml: `<mj-section full-width="full-width" padding-top="10px" css-class="first-section">Content</mj-section>`,
    },
  ],
  MjmlColumn: [
    {
      mjmlReact: (
        <MjmlColumn borderRadius={10} width={20}>
          Content
        </MjmlColumn>
      ),
      expectedMjml: `<mj-column border-radius="10px" width="20px">Content</mj-column>`,
    },
  ],
  MjmlButton: [
    {
      mjmlReact: (
        <MjmlButton height={20} fontSize={22} lineHeight={22 * 1.5}>
          Click Me
        </MjmlButton>
      ),
      expectedMjml: `<mj-button height="20px" font-size="22px" line-height="33px">Click Me</mj-button>`,
    },
    {
      // should allow passing array as content of <MjmlButton>,
      mjmlReact: (
        <MjmlButton>
          {"First Line"}
          {"Second Line"}
        </MjmlButton>
      ),
      expectedMjml: `<mj-button>First LineSecond Line</mj-button>`,
    },
  ],
  MjmlDivider: [
    {
      mjmlReact: <MjmlDivider borderWidth={2} borderColor="red" />,
      expectedMjml: `<mj-divider border-width="2px" border-color="red"></mj-divider>`,
    },
  ],
  MjmlRaw: [
    {
      mjmlReact: (
        <MjmlRaw>
          <h1>Hello World!</h1>
        </MjmlRaw>
      ),
      expectedMjml: `<mj-raw><h1>Hello World!</h1></mj-raw>`,
    },
  ],
  MjmlImage: [
    {
      mjmlReact: <MjmlImage src="https://www.faire.com/logo.png" />,
      expectedMjml: `<mj-image src="https://www.faire.com/logo.png"></mj-image>`,
    },
  ],
  MjmlSpacer: [
    {
      mjmlReact: <MjmlSpacer height={10} />,
      expectedMjml: `<mj-spacer height="10px"></mj-spacer>`,
    },
  ],
  MjmlWrapper: [
    {
      mjmlReact: (
        <MjmlWrapper padding={20} fullWidth>
          <span>Hello World!</span>
        </MjmlWrapper>
      ),
      expectedMjml: `<mj-wrapper padding="20px" full-width="full-width"><span>Hello World!</span></mj-wrapper>`,
    },
  ],
  MjmlText: [
    {
      mjmlReact: (
        <MjmlText fontWeight="20" letterSpacing={2}>
          <span>Hello World!</span>
        </MjmlText>
      ),
      expectedMjml: `<mj-text font-weight="20" letter-spacing="2px"><span>Hello World!</span></mj-text>`,
    },
  ],
  MjmlHero: [
    {
      mjmlReact: (
        <MjmlHero backgroundUrl="https://www.faire.com/logo.png">
          <MjmlImage src="https://www.faire.com/logo.png" />
        </MjmlHero>
      ),
      expectedMjml: `<mj-hero background-url="https://www.faire.com/logo.png"><mj-image src="https://www.faire.com/logo.png"></mj-image></mj-hero>`,
    },
  ],
  MjmlClass: [
    {
      mjmlReact: <MjmlClass />,
      expectedMjml: `<mj-class></mj-class>`,
    },
  ],
  MjmlInclude: [
    {
      mjmlReact: <MjmlInclude />,
      expectedMjml: `<mj-include></mj-include>`,
    },
  ],
  MjmlHead: [
    {
      mjmlReact: <MjmlHead />,
      expectedMjml: `<mj-head></mj-head>`,
    },
  ],
  MjmlHtmlAttributes: [
    {
      mjmlReact: <MjmlHtmlAttributes />,
      expectedMjml: `<mj-html-attributes></mj-html-attributes>`,
    },
  ],
  MjmlFont: [
    {
      mjmlReact: (
        <MjmlFont name="FaireFont" href="https://www.faire.com/faireFont" />
      ),
      expectedMjml: `<mj-font name="FaireFont" href="https://www.faire.com/faireFont"></mj-font>`,
    },
  ],
  MjmlPreview: [
    {
      mjmlReact: <MjmlPreview>Hello World!</MjmlPreview>,
      expectedMjml: `<mj-preview>Hello World!</mj-preview>`,
    },
  ],
  MjmlStyle: [
    {
      mjmlReact: <MjmlStyle>{".button{}"}</MjmlStyle>,
      expectedMjml: `<mj-style>.button{}</mj-style>`,
    },
    {
      mjmlReact: <MjmlStyle>{"body > div {}"}</MjmlStyle>,
      expectedMjml: `<mj-style>body &gt; div {}</mj-style>`,
    },
    {
      mjmlReact: (
        <MjmlStyle dangerouslySetInnerHTML={{ __html: "body > div {}" }} />
      ),
      expectedMjml: `<mj-style>body > div {}</mj-style>`,
    },
  ],
  MjmlTitle: [
    {
      mjmlReact: <MjmlTitle>Hello World!</MjmlTitle>,
      expectedMjml: `<mj-title>Hello World!</mj-title>`,
    },
  ],
  MjmlGroup: [
    {
      mjmlReact: (
        <MjmlGroup direction="rtl">
          <MjmlColumn />
        </MjmlGroup>
      ),
      expectedMjml: `<mj-group direction="rtl"><mj-column></mj-column></mj-group>`,
    },
  ],
  MjmlTable: [
    {
      mjmlReact: (
        <MjmlTable>
          <tr>
            <td>Hello</td>
            <td>World</td>
          </tr>
        </MjmlTable>
      ),
      expectedMjml: `<mj-table><tr><td>Hello</td><td>World</td></tr></mj-table>`,
    },
  ],
  MjmlSocial: [
    {
      mjmlReact: <MjmlSocial mode="horizontal" fontSize={16} />,
      expectedMjml: `<mj-social mode="horizontal" font-size="16px"></mj-social>`,
    },
  ],
  MjmlSocialElement: [
    {
      mjmlReact: (
        <MjmlSocial>
          <MjmlSocialElement name="google" href="https://www.faire.com">
            Google
          </MjmlSocialElement>
          <MjmlSocialElement name="instagram" href="https://www.faire.com">
            Instagram
          </MjmlSocialElement>
        </MjmlSocial>
      ),
      expectedMjml: `<mj-social><mj-social-element name="google" href="https://www.faire.com">Google</mj-social-element><mj-social-element name="instagram" href="https://www.faire.com">Instagram</mj-social-element></mj-social>`,
    },
  ],
  MjmlNavbar: [
    {
      mjmlReact: <MjmlNavbar icoAlign="center" icoColor="#333" />,
      expectedMjml: `<mj-navbar ico-align="center" ico-color="#333"></mj-navbar>`,
    },
  ],
  MjmlNavbarLink: [
    {
      mjmlReact: (
        <MjmlNavbar baseUrl="https://www.faire.com">
          <MjmlNavbarLink href="/products">Link</MjmlNavbarLink>
        </MjmlNavbar>
      ),
      expectedMjml: `<mj-navbar base-url="https://www.faire.com"><mj-navbar-link href="/products">Link</mj-navbar-link></mj-navbar>`,
    },
  ],

  MjmlCarousel: [
    {
      mjmlReact: <MjmlCarousel iconWidth="16px" borderRadius="8px 16px" />,
      expectedMjml: `<mj-carousel icon-width="16px" border-radius="8px 16px"></mj-carousel>`,
    },
  ],
  MjmlCarouselImage: [
    {
      mjmlReact: (
        <MjmlCarousel>
          <MjmlCarouselImage src="https://www.faire.com/logo.png" />
          <MjmlCarouselImage src="https://www.faire.com/logo.png" />
        </MjmlCarousel>
      ),
      expectedMjml: `<mj-carousel><mj-carousel-image src="https://www.faire.com/logo.png"></mj-carousel-image><mj-carousel-image src="https://www.faire.com/logo.png"></mj-carousel-image></mj-carousel>`,
    },
  ],
};

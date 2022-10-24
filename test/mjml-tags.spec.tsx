/* eslint-disable react/jsx-curly-brace-presence */
import React from "react";

import * as tags from "../src";
import { MjmlComment } from "../src/extensions";
import { renderToMjml } from "../src/utils/renderToMjml";

describe("mjml tags", () => {
  it("should render <Mjml/> with content", () => {
    expect(renderToMjml(<tags.Mjml>Content</tags.Mjml>)).toBe(
      "<mjml>Content</mjml>"
    );
  });

  describe("<MjmlTitle/>", () => {
    it("should render string", () => {
      expect(renderToMjml(<tags.MjmlTitle>Content</tags.MjmlTitle>)).toBe(
        "<mj-title>Content</mj-title>"
      );
    });

    it("should render an expression", () => {
      const variable = "Nice";
      expect(
        renderToMjml(<tags.MjmlTitle>{variable} Content</tags.MjmlTitle>)
      ).toBe("<mj-title>Nice Content</mj-title>");
    });

    it("should render functional component", () => {
      const HelloWorld = () => <>Hello World!</>;
      expect(
        renderToMjml(
          <tags.MjmlTitle>
            <HelloWorld />
          </tags.MjmlTitle>
        )
      ).toBe("<mj-title>Hello World!</mj-title>");
    });

    it("should render component", () => {
      class HelloWorld extends React.Component {
        render() {
          return "Hello World!";
        }
      }
      expect(
        renderToMjml(
          <tags.MjmlTitle>
            <HelloWorld />
          </tags.MjmlTitle>
        )
      ).toBe("<mj-title>Hello World!</mj-title>");
    });
  });

  it("should render <MjmlStyle/> with content", () => {
    expect(renderToMjml(<tags.MjmlStyle>{".button{}"}</tags.MjmlStyle>)).toBe(
      "<mj-style>.button{}</mj-style>"
    );
    expect(
      renderToMjml(<tags.MjmlStyle inline>{".button{}"}</tags.MjmlStyle>)
    ).toBe('<mj-style inline="inline">.button{}</mj-style>');
    expect(
      renderToMjml(<tags.MjmlStyle>{"body > div {}"}</tags.MjmlStyle>)
    ).toBe("<mj-style>body > div {}</mj-style>");
  });

  it("should render <MjmlRaw/> with content", () => {
    expect(
      renderToMjml(
        <tags.MjmlRaw>
          <h1>Hello World!</h1>
        </tags.MjmlRaw>
      )
    ).toBe("<mj-raw><h1>Hello World!</h1></mj-raw>");
  });

  it("should render <MjmlPreview/> with content", () => {
    expect(
      renderToMjml(<tags.MjmlPreview>Hello World!</tags.MjmlPreview>)
    ).toBe("<mj-preview>Hello World!</mj-preview>");
  });

  it("should render <MjmlHead/> with content", () => {
    expect(renderToMjml(<tags.MjmlHead>I am the head</tags.MjmlHead>)).toBe(
      "<mj-head>I am the head</mj-head>"
    );
  });

  it.skip("should render <MjmlFont/>", () => {
    expect(
      renderToMjml(
        <tags.MjmlFont
          name="Roboto"
          href="https://fonts.googleapis.com/css?family=Roboto"
        />
      )
    ).toBe(
      '<mj-font name="Roboto" href="https://fonts.googleapis.com/css?family=Roboto"></mj-font>'
    );
  });

  it("should render <MjmlBreakpoint/>", () => {
    expect(renderToMjml(<tags.MjmlBreakpoint width="400px" />)).toBe(
      '<mj-breakpoint width="400px"></mj-breakpoint>'
    );
  });

  it("should render <MjmlBody/> with content", () => {
    expect(
      renderToMjml(
        <tags.MjmlBody width={100} backgroundColor="blue" cssClass="body">
          Hello World!
        </tags.MjmlBody>
      )
    ).toBe(
      '<mj-body width="100px" background-color="blue" css-class="body">Hello World!</mj-body>'
    );
  });

  it("should render <MjmlSection/> with content", () => {
    expect(
      renderToMjml(
        <tags.MjmlSection fullWidth paddingTop={10} cssClass="first-section">
          Content
        </tags.MjmlSection>
      )
    ).toBe(
      '<mj-section full-width="full-width" padding-top="10px" css-class="first-section">Content</mj-section>'
    );
  });

  it("should render <MjmlColumn/> with content", () => {
    expect(
      renderToMjml(
        <tags.MjmlColumn borderRadius={10} width={20}>
          Content
        </tags.MjmlColumn>
      )
    ).toBe('<mj-column border-radius="10px" width="20px">Content</mj-column>');
  });

  it("should render <MjmlButton/> with content", () => {
    expect(
      renderToMjml(
        <tags.MjmlButton height={20} fontSize={22} lineHeight={22 * 1.5}>
          Click Me
        </tags.MjmlButton>
      )
    ).toBe(
      '<mj-button height="20px" font-size="22px" line-height="33px">Click Me</mj-button>'
    );
  });

  it("should allow passing array as content of <MjmlButton>", () => {
    expect(
      renderToMjml(
        <tags.MjmlButton>
          {"First Line"}
          {"Second Line"}
        </tags.MjmlButton>
      )
    ).toBe("<mj-button>First LineSecond Line</mj-button>");
  });

  it("should render <MjmlDivider/>", () => {
    expect(
      renderToMjml(<tags.MjmlDivider borderWidth={2} borderColor="red" />)
    ).toBe('<mj-divider border-width="2px" border-color="red"></mj-divider>');
  });

  it("should render <MjmlImage/>", () => {
    expect(
      renderToMjml(<tags.MjmlImage src="https://www.wix.com/logo.png" />)
    ).toBe('<mj-image src="https://www.wix.com/logo.png"></mj-image>');
  });

  it("should render <MjmlSpacer/>", () => {
    expect(renderToMjml(<tags.MjmlSpacer height={10} />)).toBe(
      '<mj-spacer height="10px"></mj-spacer>'
    );
  });

  it("should render <MjmlText/>", () => {
    expect(
      renderToMjml(
        <tags.MjmlText fontWeight="20" letterSpacing={2}>
          <span>Hello World!</span>
        </tags.MjmlText>
      )
    ).toBe(
      '<mj-text font-weight="20" letter-spacing="2px"><span>Hello World!</span></mj-text>'
    );
  });

  it("should render <MjmlWrapper/>", () => {
    expect(
      renderToMjml(
        <tags.MjmlWrapper padding={20} fullWidth>
          <span>Hello World!</span>
        </tags.MjmlWrapper>
      )
    ).toBe(
      '<mj-wrapper padding="20px" full-width="full-width"><span>Hello World!</span></mj-wrapper>'
    );
  });

  it("should render <MjmlAttributes/>", () => {
    expect(
      renderToMjml(
        <tags.MjmlAttributes>
          <tags.MjmlText padding={0}>Line Of Text</tags.MjmlText>
          <tags.MjmlClass name="white" color="white" />
          <tags.MjmlAll padding="0" />
        </tags.MjmlAttributes>
      )
    ).toBe(
      '<mj-attributes><mj-text padding="0px">Line Of Text</mj-text><mj-class name="white" color="white"></mj-class><mj-all padding="0"></mj-all></mj-attributes>'
    );
  });

  it("should render <MjmlHero/>", () => {
    expect(
      renderToMjml(
        <tags.MjmlHero backgroundUrl="https://www.wix.com/logo.png">
          <tags.MjmlImage src="https://www.wix.com/logo.png" />
        </tags.MjmlHero>
      )
    ).toBe(
      '<mj-hero background-url="https://www.wix.com/logo.png"><mj-image src="https://www.wix.com/logo.png"></mj-image></mj-hero>'
    );
  });

  it("should render <MjmlComment/>", () => {
    expect(renderToMjml(<MjmlComment>Hello World!</MjmlComment>)).toBe(
      "<mj-raw><!--Hello World!--></mj-raw>"
    );
  });

  describe("validate color value", () => {
    it("should render with passed values", () => {
      expect(
        renderToMjml(
          <tags.MjmlColumn
            innerBackgroundColor="#ffffffee"
            backgroundColor="red"
          >
            <tags.MjmlDivider
              borderColor="#fdfdfd"
              containerBackgroundColor="rgb(255,0,0)"
            />
            <tags.MjmlText color="rgba(255,0,0,0.1)">Content</tags.MjmlText>
          </tags.MjmlColumn>
        )
      ).toBe(
        '<mj-column inner-background-color="#ffffffee" background-color="red"><mj-divider border-color="#fdfdfd" container-background-color="rgb(255,0,0)"></mj-divider><mj-text color="rgba(255,0,0,0.1)">Content</mj-text></mj-column>'
      );
    });

    it.skip("should render empty color attribute with passed values", () => {
      expect(
        renderToMjml(
          <tags.MjmlColumn
            innerBackgroundColor="#fafafaf"
            backgroundColor="brown sugar"
          >
            <tags.MjmlDivider
              borderColor="#g6labc"
              containerBackgroundColor="rgb(255,2)"
            />
            <tags.MjmlText color="rgba(255,0)">Content</tags.MjmlText>
          </tags.MjmlColumn>
        )
      ).toBe(
        '<mj-column inner-background-color="" background-color=""><mj-divider border-color="" container-background-color=""></mj-divider><mj-text color="">Content</mj-text></mj-column>'
      );
    });
  });
});

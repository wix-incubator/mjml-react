import React from 'react';
import {expect} from 'chai';

import * as tags from '../src';

const renderToMjml = tags.renderToMjml;

describe('mjml tags', () => {

  it('should render <Mjml/> with content', () => {
    expect(renderToMjml(<tags.Mjml>Content</tags.Mjml>))
      .to.equal('<mjml>Content</mjml>');
  });

  it('should render <MjmlTitle/> with content', () => {
    expect(renderToMjml(<tags.MjmlTitle>Content</tags.MjmlTitle>))
      .to.equal('<mj-title>Content</mj-title>');
  });

  it('should render <MjmlStyle/> with content', () => {
    expect(renderToMjml(<tags.MjmlStyle>{'.button{}'}</tags.MjmlStyle>)).to.equal('<mj-style>.button{}</mj-style>');
    expect(renderToMjml(<tags.MjmlStyle inline>{'.button{}'}</tags.MjmlStyle>)).to.equal('<mj-style inline="inline">.button{}</mj-style>');
  });

  it('should render <MjmlRaw/> with content', () => {
    expect(renderToMjml(<tags.MjmlRaw><h1>Hello World!</h1></tags.MjmlRaw>))
      .to.equal('<mj-raw><h1>Hello World!</h1></mj-raw>');
  });

  it('should render <MjmlPreview/> with content', () => {
    expect(renderToMjml(<tags.MjmlPreview>Hello World!</tags.MjmlPreview>))
      .to.equal('<mj-preview>Hello World!</mj-preview>');
  });

  it('should render <MjmlHead/> with content', () => {
    expect(renderToMjml(<tags.MjmlHead>I am the head</tags.MjmlHead>))
      .to.equal('<mj-head>I am the head</mj-head>');
  });

  it('should render <MjmlFont/>', () => {
    expect(renderToMjml(
      <tags.MjmlFont
        name="Roboto"
        href="https://fonts.googleapis.com/css?family=Roboto"
        />
    ))
      .to.equal('<mj-font name="Roboto" href="https://fonts.googleapis.com/css?family=Roboto"></mj-font>');
  });

  it('should render <MjmlBreakpoint/>', () => {
    expect(renderToMjml(<tags.MjmlBreakpoint width={400}/>))
      .to.equal('<mj-breakpoint width="400px"></mj-breakpoint>');
  });

  it('should render <MjmlBody/> with content', () => {
    expect(renderToMjml(
      <tags.MjmlBody
        width={100}
        backgroundColor="blue"
        cssClass="body"
        >
        Hello World!
      </tags.MjmlBody>
    ))
      .to.equal('<mj-body width="100px" background-color="blue" css-class="body">Hello World!</mj-body>');
  });

  it('should render <MjmlSection/> with content', () => {
    expect(renderToMjml(
      <tags.MjmlSection
        fullWidth
        paddingTop={10}
        cssClass="first-section"
        >
        Content
      </tags.MjmlSection>
    ))
      .to.equal('<mj-section full-width="full-width" padding-top="10px" css-class="first-section">Content</mj-section>');
  });

  it('should render <MjmlColumn/> with content', () => {
    expect(renderToMjml(
      <tags.MjmlColumn
        borderRadius={10}
        width={20}
        >
        Content
      </tags.MjmlColumn>
    ))
      .to.equal('<mj-column border-radius="10px" width="20px">Content</mj-column>');
  });

  it('should render <MjmlButton/> with content', () => {
    expect(renderToMjml(
      <tags.MjmlButton
        height={20}
        fontSize={22}
        lineHeight={22 * 1.5}
        >
        Click Me
      </tags.MjmlButton>
    ))
      .to.equal('<mj-button height="20px" font-size="22px" line-height="33">Click Me</mj-button>');
  });

  it('should render <MjmlDivider/>', () => {
    expect(renderToMjml(<tags.MjmlDivider borderWidth={2} borderColor="red"/>))
      .to.equal('<mj-divider border-width="2px" border-color="red"></mj-divider>');
  });

  it('should render <MjmlImage/>', () => {
    expect(renderToMjml(<tags.MjmlImage src="https://www.wix.com/logo.png"/>))
      .to.equal('<mj-image src="https://www.wix.com/logo.png"></mj-image>');
  });

  it('should render <MjmlSpacer/>', () => {
    expect(renderToMjml(<tags.MjmlSpacer height={10}/>))
      .to.equal('<mj-spacer height="10px"></mj-spacer>');
  });

  it('should render <MjmlText/>', () => {
    expect(renderToMjml(
      <tags.MjmlText fontWeight={20} letterSpacing={2}>
        <span>Hello World!</span>
      </tags.MjmlText>
    ))
      .to.equal('<mj-text font-weight="20" letter-spacing="2px"><span>Hello World!</span></mj-text>');
  });

  it('should render <MjmlWrapper/>', () => {
    expect(renderToMjml(
      <tags.MjmlWrapper padding={20} fullWidth>
        <span>Hello World!</span>
      </tags.MjmlWrapper>
    ))
      .to.equal('<mj-wrapper padding="20px" full-width="full-width"><span>Hello World!</span></mj-wrapper>');
  });

});

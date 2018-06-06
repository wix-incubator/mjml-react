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

});

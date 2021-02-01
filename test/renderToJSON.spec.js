import React from 'react';
import { expect } from 'chai';
import mjml2json from 'mjml2json';

import {
  renderToJSON,
  Mjml,
  MjmlStyle,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlText,
  MjmlDivider,
  MjmlRaw,
  renderToMjml,
  MjmlHead,
} from '../src';

import { MjmlComment } from '../extensions';

const useCases = [
  <Mjml />,

  <Mjml>content</Mjml>,

  <Mjml>
    <MjmlRaw>content</MjmlRaw>
  </Mjml>,

  <Mjml>
    <MjmlRaw>
      <div>content</div>
    </MjmlRaw>
  </Mjml>,

  <Mjml>{'<b />'}</Mjml>,

  <Mjml>
    <MjmlHead>
      <MjmlStyle>{'.class {color: red;}'}</MjmlStyle>
    </MjmlHead>
  </Mjml>,

  <Mjml>
    <MjmlBody>
      <MjmlRaw>
        <div>{'<b/>'}</div>
        <p>hello &apos; &amp; world </p>
      </MjmlRaw>
    </MjmlBody>
  </Mjml>,

  <MjmlRaw>
    <div dangerouslySetInnerHTML={{ __html: '<div>Hello World!</div>' }}></div>
  </MjmlRaw>,

  <Mjml>
    <MjmlBody>
      <MjmlSection>
        <MjmlColumn>
          <MjmlImage width="100px" src="/assets/img/logo-small.png" />
          <MjmlDivider borderColor="#F45E43" />
          <MjmlText fontSize="20px" color="#F45E43" fontFamily="helvetica">
            Hello World
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>,

  <MjmlComment>content</MjmlComment>,
];

useCases.forEach((tree, i) => {
  it(`should render usecase ${i}`, () => {
    const mjml = renderToMjml(tree);
    expect(mjml2json(mjml)).to.eql(renderToJSON(tree));
  });
});

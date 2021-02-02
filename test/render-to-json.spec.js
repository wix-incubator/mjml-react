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
  MjmlHead,
  MjmlButton,
  renderToMjml,
} from '../src';

import {
  MjmlComment,
  MjmlConditionalComment,
  MjmlTrackingPixel,
  MjmlYahooStyle,
} from '../extensions';

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

  <MjmlConditionalComment>content</MjmlConditionalComment>,

  <MjmlComment>{'<div />'}</MjmlComment>,

  <MjmlTrackingPixel src="https://somedomain.com/somepic.png" />,

  <MjmlYahooStyle>content</MjmlYahooStyle>,

  <MjmlImage alt="content" />,

  <MjmlImage alt="<div>content</div>" />,

  <MjmlImage alt="<div>&amp;content</div>" />,

  <MjmlButton>
    <div dangerouslySetInnerHTML={{ __html: '<div>Hello World!</div>' }}></div>
  </MjmlButton>,

  <MjmlComment>{'<b /> & $ " '}</MjmlComment>,

  <MjmlText>10$ & Free Delivery</MjmlText>,
];

useCases.forEach((tree, i) => {
  it(`should render usecase ${i}`, () => {
    const mjml = renderToMjml(tree);
    expect(mjml2json(mjml)).to.eql(renderToJSON(tree));
  });
});

// it('measure times', () => {
//   const n = 10000;
//   const durationMjml = time(
//     times(n, () => {
//       useCases.forEach((_) => {
//         renderToMjml(_);
//       });
//     }),
//   );

//   const durationJson = time(
//     times(n, () => {
//       useCases.forEach((_) => {
//         renderToJSON(_);
//       });
//     }),
//   );

//   console.log({ n, durationMjml, durationJson });
// });

// function time(fn) {
//   const start = Date.now();
//   fn();
//   return Date.now() - start;
// }

// function times(n, fn) {
//   return () => {
//     for (let i = 0; i < n; i++) {
//       fn();
//     }
//   };
// }

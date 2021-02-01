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
];

useCases.forEach((tree, i) => {
  it(`should render usecase ${i}`, () => {
    const mjml = renderToMjml(tree);
    expect(mjml2json(mjml)).to.eql(renderToJSON(tree));
  });
});

describe('render to JSON', () => {
  it('should render nested raw content as a string', () => {
    const result = renderToJSON(
      <Mjml>
        <MjmlRaw>
          <div>content</div>
        </MjmlRaw>
      </Mjml>,
    );
    expect(result).to.eql({
      tagName: 'mjml',
      children: [
        {
          tagName: 'mj-raw',
          content: '<div>content</div>',
          attributes: {},
        },
      ],
      attributes: {},
    });
  });

  it('should render <Mjml/> example with children', () => {
    expect(
      renderToJSON(
        <Mjml>
          <MjmlBody>
            <MjmlSection>
              <MjmlColumn>
                <MjmlImage width="100px" src="/assets/img/logo-small.png" />
                <MjmlDivider borderColor="#F45E43" />
                <MjmlText
                  fontSize="20px"
                  color="#F45E43"
                  fontFamily="helvetica"
                >
                  Hello World
                </MjmlText>
              </MjmlColumn>
            </MjmlSection>
          </MjmlBody>
        </Mjml>,
      ),
    ).to.eql({
      attributes: {},
      children: [
        {
          attributes: {},
          children: [
            {
              attributes: {},
              children: [
                {
                  attributes: {},
                  children: [
                    {
                      attributes: {
                        src: '/assets/img/logo-small.png',
                        width: '100px',
                      },
                      tagName: 'mj-image',
                    },
                    {
                      attributes: {
                        'border-color': '#F45E43',
                      },
                      tagName: 'mj-divider',
                    },
                    {
                      attributes: {
                        color: '#F45E43',
                        'font-family': 'helvetica',
                        'font-size': '20px',
                      },
                      content: 'Hello World',
                      tagName: 'mj-text',
                    },
                  ],
                  tagName: 'mj-column',
                },
              ],
              tagName: 'mj-section',
            },
          ],
          tagName: 'mj-body',
        },
      ],
      tagName: 'mjml',
    });
  });
});

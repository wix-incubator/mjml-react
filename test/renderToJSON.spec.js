import React from 'react';
import { expect } from 'chai';

import {
  renderToJSON,
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlText,
  MjmlDivider,
  MjmlRaw,
} from '../src';

describe('render to JSON', () => {
  it('should render empty tag', () => {
    expect(renderToJSON(<Mjml />)).to.eql({
      tagName: 'mjml',
      attributes: {},
    });
  });

  it('should render tag with a string content', () => {
    expect(renderToJSON(<Mjml>content</Mjml>)).to.eql({
      tagName: 'mjml',
      attributes: {},
      content: 'content',
    });
  });

  it('should escape string content of a tag', () => {
    const result = renderToJSON(<Mjml>{'<b />'}</Mjml>);
    expect(result).to.eql({
      tagName: 'mjml',
      content: '&lt;b /&gt;',
      attributes: {},
    });
  });

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

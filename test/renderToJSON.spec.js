import React from 'react';
import { expect } from 'chai';

import * as tags from '../src';

const renderToJSON = tags.renderToJSON;

describe('render to JSON', () => {
  it('should render simple <Mjml/> tag with content', () => {
    expect(renderToJSON(<tags.Mjml>Content</tags.Mjml>)).to.eql({
      tagName: 'mjml',
      attributes: {},
      content: 'Content',
    });
  });

  it('should render <Mjml/> example with children', () => {
    expect(
      renderToJSON(
        <tags.Mjml>
          <tags.MjmlBody>
            <tags.MjmlSection>
              <tags.MjmlColumn>
                <tags.MjmlImage
                  width="100px"
                  src="/assets/img/logo-small.png"
                />
                <tags.MjmlDivider borderColor="#F45E43" />
                <tags.MjmlText
                  fontSize="20px"
                  color="#F45E43"
                  fontFamily="helvetica"
                >
                  Hello World
                </tags.MjmlText>
              </tags.MjmlColumn>
            </tags.MjmlSection>
          </tags.MjmlBody>
        </tags.Mjml>,
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

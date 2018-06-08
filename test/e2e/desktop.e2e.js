import React from 'react';
import {expect} from 'chai';
import puppeteer from 'puppeteer';
import {eyes} from 'with-eyes';

import {
  render,
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage
} from '../../src';

describe('mjml-react: desktop mail version', () => {

  let browser;
  let page;
  let renderErrors;

  before(async () => {
    browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ],
      devtools: false,
      headless: false
    });
  });

  after(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.setViewport({width: 1440, height: 900});
  });

  beforeEach(async () => {
    const {html, errors} = render((
      <Mjml>
        <MjmlHead>
          <MjmlTitle>Last Minute Offer</MjmlTitle>
          <MjmlPreview>Last Minute Offer...</MjmlPreview>
        </MjmlHead>
        <MjmlBody width={500}>
          <MjmlSection fullWidth backgroundColor="#efefef">
            <MjmlColumn>
              <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg"/>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection>
            <MjmlColumn>
              <MjmlButton
                padding="20px"
                backgroundColor="#346DB7"
                href="https://www.wix.com/"
                >I like it!</MjmlButton>
            </MjmlColumn>
          </MjmlSection>
        </MjmlBody>
      </Mjml>
    ), {validationLevel: 'soft'});

    renderErrors = errors;

    await page.setContent(html);
  });

  eyes.it('should have no render errors', () => {
    expect(renderErrors).to.be.empty;
  });

});

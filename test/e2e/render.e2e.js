import {expect} from 'chai';
import puppeteer from 'puppeteer';
import {eyes} from 'with-eyes';

import renderEmail from './render-email';

describe('mjml-react', () => {

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

  const renderInBrowser = async viewPortOptions => {
    page = await browser.newPage();
    await page.setViewport(viewPortOptions);

    const {html, errors} = renderEmail();

    renderErrors = errors;

    await page.goto(`data:text/html,${html}`, {waitUntil: 'networkidle0'});
  };

  describe('desktop', () => {
    beforeEach(async () => {
      await renderInBrowser({
        height: 2500,
        width: 1280
      });
    });

    eyes.it('should have no render errors', async () => {
      expect(renderErrors).to.be.empty;

      await eyes.checkImage(await page.screenshot(), 'desktop');
    });
  });

  describe('mobile', () => {
    beforeEach(async () => {
      await renderInBrowser({
        isMobile: true,
        height: 2500,
        width: 600
      });
    });

    eyes.it('should have no render errors', async () => {
      expect(renderErrors).to.be.empty;

      await eyes.checkImage(await page.screenshot(), 'mobile');
    });
  });

});

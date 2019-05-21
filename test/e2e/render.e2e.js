process.env.WITH_EYES_TIMEOUT = 120000;

const {expect} = require('chai');
const puppeteer = require('puppeteer');
const {eyes} = require('with-eyes');

const renderEmail = require('./render-email').default;

describe('mjml-react', () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      devtools: false,
      headless: false
    });
  });

  after(() => browser.close());
  afterEach(() => eyes.abortIfNotClosed());

  const renderInBrowser = async viewPortOptions => {
    page = await browser.newPage();
    await page.setViewport(viewPortOptions);

    const {html, errors} = renderEmail();
    expect(errors).to.deep.equal([]);

    await page.goto(htmlToDataUri(html), {waitUntil: 'networkidle0'});
  };

  describe('desktop', () => {
    eyes.it('should have no render errors', async () => {
      await renderInBrowser({width: 1280, height: 600});
      await eyes.checkImage(await page.screenshot({fullPage: true}), 'desktop');
    });
  });

  describe('mobile', () => {
    eyes.it('should have no render errors', async () => {
      await renderInBrowser({width: 480, height: 600, isMobile: true});
      await eyes.checkImage(await page.screenshot({fullPage: true}), 'mobile');
    });
  });
});

function htmlToDataUri(html) {
  return `data:text/html,${html.replace(/#/g, '%23')}`;
}

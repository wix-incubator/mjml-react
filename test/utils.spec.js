import {expect} from 'chai';

import {
  namedEntityToHexCode,
  fixConditionalComment,
  useHttps,
  toMobileFontSize
} from '../src/utils/index';

describe('utils', () => {

  describe('namedEntityToHexCode', () => {
    it('should not replace incomplete entity', () => {
      expect(namedEntityToHexCode('&amp')).to.equal('&amp');
    });

    it('should not replace unknown entity', () => {
      expect(namedEntityToHexCode('&rambo;')).to.equal('&rambo;');
    });

    it('should not replace entity in hex code', () => {
      expect(namedEntityToHexCode('&#38;')).to.equal('&#38;');
    });

    it('should replace known entity to hex code', () => {
      expect(namedEntityToHexCode('&amp;')).to.equal('&#38;');
      expect(namedEntityToHexCode('&apos;')).to.equal('&#39;');
    });
  });

  describe('fixConditionalComment', () => {
    it('should not replace if there is no MSO conditionals', () => {
      expect(fixConditionalComment('<!--no changes-->', 'what ever', 'if IE')).to.equal('<!--no changes-->');
    });
    it('should replace condition matching the content', () => {
      expect(fixConditionalComment('<!--[if mso]>...<![endif]-->', '...', 'if IE')).to.equal('<!--[if IE]>...<![endif]-->');
    });
  });

  describe('useHttps', () => {
    it('should not alter falsy url', () => {
      expect(useHttps('')).to.equal('');
    });
    it('should not alter valid url', () => {
      expect(useHttps('https://www.wix.com')).to.equal('https://www.wix.com');
    });
    it('should replace http://', () => {
      expect(useHttps('http://www.wix.com')).to.equal('https://www.wix.com');
    });
    it('should replace //', () => {
      expect(useHttps('//www.wix.com')).to.equal('https://www.wix.com');
    });
    it('should add missing schema', () => {
      expect(useHttps('www.wix.com')).to.equal('https://www.wix.com');
    });
  });

  describe('toMobileFontSize', () => {
    it('minimum should be 12', () => {
      [...Array(12).keys()].forEach(value => {
        expect(toMobileFontSize(value)).to.equal(12);
        expect(toMobileFontSize(`${value}px`)).to.equal(12);
      });
    });
    it('not modified from 12 to 26', () => {
      [...Array(14).keys()].forEach(value => {
        expect(toMobileFontSize(value + 12)).to.equal(value + 12);
        expect(toMobileFontSize(`${value + 12}px`)).to.equal(value + 12);
      });
    });
    it('max should be 50', () => {
      expect(toMobileFontSize(200)).to.equal(50);
    });
  });

});

import { expect } from 'chai';

import {
  namedEntityToHexCode,
  fixConditionalComment,
  useHttps,
  toMobileFontSize,
  getTextAlign,
  addQueryParams,
} from '../src/utils/index';

import { isValidColor } from '../src/utils';

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
      expect(
        fixConditionalComment('<!--no changes-->', 'what ever', 'if IE'),
      ).to.equal('<!--no changes-->');
    });
    it('should replace condition matching the content', () => {
      expect(
        fixConditionalComment('<!--[if mso]>...<![endif]-->', '...', 'if IE'),
      ).to.equal('<!--[if IE]>...<![endif]-->');
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
    it('should not add missing schema', () => {
      expect(useHttps('www.wix.com')).to.equal('www.wix.com');
    });
  });

  describe('toMobileFontSize', () => {
    it('minimum should be 12', () => {
      [...Array(12).keys()].forEach((value) => {
        expect(toMobileFontSize(value)).to.equal(12);
        expect(toMobileFontSize(`${value}px`)).to.equal(12);
      });
    });
    it('not modified from 12 to 26', () => {
      Array.from(Array(14).keys()).forEach((value) => {
        expect(toMobileFontSize(value + 12)).to.equal(value + 12);
        expect(toMobileFontSize(`${value + 12}px`)).to.equal(value + 12);
      });
    });
    it('max should be 50', () => {
      expect(toMobileFontSize(200)).to.equal(50);
    });
  });

  describe('getTextAlign', () => {
    it('should return default alignment', () => {
      expect(getTextAlign()).to.equal('center');
      expect(getTextAlign(null, 'left')).to.equal('left');
    });
    it('should return default alignment if value is unrecognized', () => {
      expect(getTextAlign('blah')).to.equal('center');
    });
    it('should return a valid text align', () => {
      expect(getTextAlign('left')).to.equal('left');
      expect(getTextAlign('right')).to.equal('right');
      expect(getTextAlign('center')).to.equal('center');
      expect(getTextAlign('inherit')).to.equal('inherit');
      expect(getTextAlign('justify')).to.equal('justify');
    });
  });

  describe('addQueryParams', () => {
    it('should add a single query param', () => {
      expect(addQueryParams('url', { one: 'two' })).to.equal('url?one=two');
    });
    it('should add multiple query params', () => {
      expect(addQueryParams('url', { one: 'two', three: 'four' })).to.equal(
        'url?one=two&three=four',
      );
    });
    it('should escape param value', () => {
      expect(addQueryParams('url', { one: '?two' })).to.equal('url?one=%3Ftwo');
    });
  });

  describe('isValidColor', () => {
    it('should return true if #ffffff is passed', () => {
      expect(isValidColor('#ffffff')).to.equal(true);
    });
    it('should return false if #fafafaf is passed', () => {
      expect(isValidColor('#fafafaf')).to.equal(false);
    });
    it('should return false if #g6labc is passed', () => {
      expect(isValidColor('#g6labc')).to.equal(false);
    });
    it('should return true if #fab is passed', () => {
      expect(isValidColor('#fab')).to.equal(true);
    });
    it('should return true if white is passed', () => {
      expect(isValidColor('white')).to.equal(true);
    });
    it('should return true if transparent is passed', () => {
      expect(isValidColor('transparent')).to.equal(true);
    });
    it('should return true if rgb(255,0,0) is passed', () => {
      expect(isValidColor('rgb(255,0,0)')).to.equal(true);
    });
    it('should return false if rgb(255,2) is passed', () => {
      expect(isValidColor('rgb(255,2)')).to.equal(false);
    });
    it('should return true if rgba(255,0,0,0.1) is passed', () => {
      expect(isValidColor('rgb(255,0,0,0.1)')).to.equal(true);
    });
    it('should return false if rgba(255,0) is passed', () => {
      expect(isValidColor('rgba(255,0)')).to.equal(false);
    });
  });
});

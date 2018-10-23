import React from 'react';
import {expect} from 'chai';

import {renderToMjml} from '../src';

import {
  MjmlComment,
  MjmlConditionalComment,
  MjmlYahooStyle,
  MjmlTrackingPixel
} from '../src/extensions';

describe('extensions', () => {

  describe('simple comment', () => {
    it('should render', () => {
      const comment = <MjmlComment>First, solve the problem. Then, write the code.</MjmlComment>;
      const markup = renderToMjml(comment);
      expect(markup).to.equal('<mj-raw><!--First, solve the problem. Then, write the code.--></mj-raw>');
    });
    it('should not render if comment is empty', () => {
      expect(renderToMjml(<MjmlComment/>)).to.equal('');
      expect(renderToMjml(<MjmlComment>{''}</MjmlComment>)).to.equal('');
      expect(renderToMjml(<MjmlComment>{' '}</MjmlComment>)).to.equal('');
    });
  });

  describe('conditional comment', () => {
    it('should render', () => {
      const comment = <MjmlConditionalComment>First, solve the problem. Then, write the code.</MjmlConditionalComment>;
      const markup = renderToMjml(comment);
      expect(markup).to.equal('<mj-raw><!--[if gte mso 9]>First, solve the problem. Then, write the code.<![endif]--></mj-raw>');
    });
    it('should allow changing condition', () => {
      const comment = <MjmlConditionalComment condition="if IE">First, solve the problem. Then, write the code.</MjmlConditionalComment>;
      const markup = renderToMjml(comment);
      expect(markup).to.equal('<mj-raw><!--[if IE]>First, solve the problem. Then, write the code.<![endif]--></mj-raw>');
    });
    it('should not render if comment is empty', () => {
      expect(renderToMjml(<MjmlConditionalComment/>)).to.equal('');
      expect(renderToMjml(<MjmlConditionalComment>{''}</MjmlConditionalComment>)).to.equal('');
      expect(renderToMjml(<MjmlConditionalComment>{' '}</MjmlConditionalComment>)).to.equal('');
    });
  });

  describe('yahoo style', () => {
    it('should render', () => {
      const markup = renderToMjml(<MjmlYahooStyle>{`a { color: blue; }`}</MjmlYahooStyle>);
      expect(markup).to.equal('<mj-raw><style>@media screen yahoo {a { color: blue; }}</style></mj-raw>');
    });
  });

  describe('tracking pixel', () => {
    it('should render 1x1 raw image with provided src', () => {
      const markup = renderToMjml(<MjmlTrackingPixel src={'tracking-pixel'}/>);
      expect(markup).to.include('<mj-raw><img src="tracking-pixel" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important" width="1" height="1"/></mj-raw>');
    });
  });

});

import React from 'react';
import {expect} from 'chai';

import {
  render,
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlBody,
  MjmlRaw
} from '../src';

describe('render()', () => {

  it('should render the HTML', () => {
    const email = (
      <Mjml>
        <MjmlHead>
          <MjmlTitle>Title</MjmlTitle>
        </MjmlHead>
        <MjmlBody>
          <MjmlRaw>
            <p>Paragraph</p>
          </MjmlRaw>
        </MjmlBody>
      </Mjml>
    );
    const {html} = render(email);
    expect(html).to.not.be.undefined;
    expect(html).to.contain('<!doctype html>');
    expect(html).to.contain('<title>Title</title>');
    expect(html).to.contain('<p>Paragraph</p>');
  });

  it('should throw an error if invalid markup is given', () => {
    const email = <div>Ooops!</div>;
    expect(() => render(email))
      .to.throw('Element div doesn\'t exist or is not registered');
  });

  it('should not throw an error if soft validation level is passed', () => {
    const email = <div>Ooops!</div>;
    const {errors} = render(email, {validationLevel: 'soft', minify: false});
    expect(errors.length).to.equal(1);
    expect(errors[0].message)
      .to.contain('Element div doesn\'t exist or is not registered');
  });

});

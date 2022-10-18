import { expect } from "chai";
import React from "react";

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlBody,
  MjmlRaw,
  MjmlSection,
  MjmlHtmlAttribute,
  MjmlHtmlAttributes,
  MjmlSelector,
  MjmlColumn,
  MjmlText,
} from "../src";
import { render } from "../src/utils/render";

describe("render()", () => {
  it("should render the HTML", () => {
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
    const { html } = render(email, { minify: true });
    expect(html).to.not.be.undefined;
    expect(html).to.contain("<!doctype html>");
    expect(html).to.contain("<title>Title</title>");
    expect(html).to.contain("<p>Paragraph</p>");
  });

  it("should throw an error if invalid markup is given", () => {
    const email = (
      <Mjml>
        <MjmlBody>
          <div>Ooops!</div>
        </MjmlBody>
      </Mjml>
    );
    expect(() => render(email)).to.throw(
      "Element div doesn't exist or is not registered"
    );
  });

  it("should not throw an error if soft validation level is passed", () => {
    const email = (
      <Mjml>
        <MjmlBody>
          <div>Ooops!</div>
        </MjmlBody>
      </Mjml>
    );
    const { errors } = render(email, {
      validationLevel: "soft",
      minify: false,
    });
    expect(errors.length).to.equal(1);
    expect(errors[0].message).to.contain(
      "Element div doesn't exist or is not registered"
    );
  });

  it.skip("should render html attributes with custom selector", () => {
    const email = (
      <Mjml>
        <MjmlHead>
          <MjmlHtmlAttributes>
            <MjmlSelector path=".custom div">
              <MjmlHtmlAttribute name="data-id">42</MjmlHtmlAttribute>
            </MjmlSelector>
          </MjmlHtmlAttributes>
        </MjmlHead>
        <MjmlBody>
          <MjmlSection>
            <MjmlColumn>
              <MjmlText css-class="custom">Hello World!</MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlBody>
      </Mjml>
    );
    const { html } = render(email, {
      validationLevel: "soft",
      minify: false,
    });
    expect(html).contains(
      '<div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;" data-id="42">Hello World!</div>'
    );
  });
});

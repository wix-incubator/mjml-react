import React from "react";

import { Mjml, MjmlHead, MjmlTitle, MjmlBody, MjmlRaw } from "../src";
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
    expect(html).not.toBe(undefined);
    expect(html).toContain("<!doctype html>");
    expect(html).toContain("<title>Title</title>");
    expect(html).toContain("<p>Paragraph</p>");
  });

  it("should throw an error if invalid markup is given", () => {
    const email = (
      <Mjml>
        <MjmlBody>
          <div>Ooops!</div>
        </MjmlBody>
      </Mjml>
    );
    expect(() => render(email)).toThrow(
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
    expect(errors!.length).toBe(1);
    expect(errors![0]!.message).toContain(
      "Element div doesn't exist or is not registered"
    );
  });
});

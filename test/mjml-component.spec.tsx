import React from "react";

import { MjmlButton } from "../src";
import { renderToMjml } from "../src/utils/renderToMjml";

describe("test that MJML elements can accept shorthand and units on CSS props", () => {
  it("can accept CSS props with different units", () => {
    const buttonNoUnit = <MjmlButton padding="0">No unit</MjmlButton>;
    const buttonPx = <MjmlButton letterSpacing="1px">Px</MjmlButton>;
    const buttonPercentage = <MjmlButton height="2%">Percent</MjmlButton>;
    const buttonEm = <MjmlButton letterSpacing="3em">Em</MjmlButton>;

    expect(renderToMjml(buttonNoUnit)).toBe(
      '<mj-button padding="0">No unit</mj-button>'
    );
    expect(renderToMjml(buttonPx)).toBe(
      '<mj-button letter-spacing="1px">Px</mj-button>'
    );
    expect(renderToMjml(buttonPercentage)).toBe(
      '<mj-button height="2%">Percent</mj-button>'
    );
    expect(renderToMjml(buttonEm)).toBe(
      '<mj-button letter-spacing="3em">Em</mj-button>'
    );
  });

  it("can accept CSS props as a single number", () => {
    const button = <MjmlButton padding={0}>Single num</MjmlButton>;
    expect(renderToMjml(button)).toBe(
      '<mj-button padding="0px">Single num</mj-button>'
    );
  });

  it("can accept CSS props with shorthand", () => {
    const button1 = <MjmlButton padding="0">Button1</MjmlButton>;
    const button2 = <MjmlButton padding="0 1px">Button2</MjmlButton>;
    const button3 = <MjmlButton padding="0 1px 2%">Button3</MjmlButton>;
    const button4 = <MjmlButton padding="0 1px 2% 0px">Button4</MjmlButton>;

    expect(renderToMjml(button1)).toBe(
      '<mj-button padding="0">Button1</mj-button>'
    );
    expect(renderToMjml(button2)).toBe(
      '<mj-button padding="0 1px">Button2</mj-button>'
    );
    expect(renderToMjml(button3)).toBe(
      '<mj-button padding="0 1px 2%">Button3</mj-button>'
    );
    expect(renderToMjml(button4)).toBe(
      '<mj-button padding="0 1px 2% 0px">Button4</mj-button>'
    );
  });
});

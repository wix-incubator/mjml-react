import React from "react";

import * as mjmlComponents from "../src";
import { renderToMjml } from "../src/utils/renderToMjml";

/**
 * Test focused on prop values. The component used for testing the prop
 * is arbitrary.
 */
describe("mjml components prop values", () => {
  it("should render component with dangerouslySetInnerHTML prop", () => {
    expect(
      renderToMjml(
        <mjmlComponents.MjmlRaw
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: "<div>hello World</div>" }}
        />
      )
    ).toBe(`<mj-raw><div>hello World</div></mj-raw>`);
  });

  it("incorrect prop value should throw TS error", () => {
    expect(
      renderToMjml(
        <mjmlComponents.MjmlRaw
          // @ts-expect-error prop should be invalid for test purposes
          iAmNotAProp="random"
        />
      )
    ).toBe(`<mj-raw i-am-not-a-prop="random"></mj-raw>`);
  });

  it("fullWidth and inline props convert to string", () => {
    expect(renderToMjml(<mjmlComponents.MjmlSection fullWidth />)).toBe(
      `<mj-section full-width="full-width"></mj-section>`
    );
    expect(renderToMjml(<mjmlComponents.MjmlStyle inline />)).toBe(
      `<mj-style inline="inline"></mj-style>`
    );
  });

  it("enum prop type accepts all enum values", () => {
    const { MjmlTable } = mjmlComponents;
    expect(renderToMjml(<MjmlTable align="left" />)).toBe(
      `<mj-table align="left"></mj-table>`
    );
    expect(renderToMjml(<MjmlTable align="right" />)).toBe(
      `<mj-table align="right"></mj-table>`
    );
    expect(renderToMjml(<MjmlTable align="center" />)).toBe(
      `<mj-table align="center"></mj-table>`
    );

    // Test with invalid props. Code should still render but typescript should
    // throw an error
    // @ts-expect-error invalid align prop for test purposes
    expect(renderToMjml(<MjmlTable align="unknown" />)).toBe(
      `<mj-table align="unknown"></mj-table>`
    );
  });

  it("padding accepts px, percent, and ephemeral units", () => {
    const { MjmlButton } = mjmlComponents;
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

  it("padding and other props convert number type props to pixel values", () => {
    const { MjmlButton } = mjmlComponents;
    const button = (
      <MjmlButton padding={16} width={300} height={56}>
        Single num
      </MjmlButton>
    );
    expect(renderToMjml(button)).toBe(
      '<mj-button padding="16px" width="300px" height="56px">Single num</mj-button>'
    );
  });

  it("padding can accept matrix of props", () => {
    const { MjmlButton } = mjmlComponents;
    expect(renderToMjml(<MjmlButton padding="0">Button1</MjmlButton>)).toBe(
      '<mj-button padding="0">Button1</mj-button>'
    );
    expect(renderToMjml(<MjmlButton padding="0 1px">Button2</MjmlButton>)).toBe(
      '<mj-button padding="0 1px">Button2</mj-button>'
    );
    expect(
      renderToMjml(<MjmlButton padding="0 1px 2%">Button3</MjmlButton>)
    ).toBe('<mj-button padding="0 1px 2%">Button3</mj-button>');
    expect(
      renderToMjml(<MjmlButton padding="0 1px 2% 0px">Button4</MjmlButton>)
    ).toBe('<mj-button padding="0 1px 2% 0px">Button4</mj-button>');

    // Test with invalid props. Code should still render but typescript should
    // throw an error
    expect(
      // @ts-expect-error invalid padding prop (not a matrix) for test purposes
      renderToMjml(<MjmlButton padding="not a matrix">Button5</MjmlButton>)
    ).toBe('<mj-button padding="not a matrix">Button5</mj-button>');

    expect(
      renderToMjml(
        // @ts-expect-error invalid padding prop (too many values) for test purposes
        <MjmlButton padding="1px 1px 1px 1px 1px">Button6</MjmlButton>
      )
    ).toBe('<mj-button padding="1px 1px 1px 1px 1px">Button6</mj-button>');
  });

  it("accepts correct property types for React.CSSProperties", () => {
    const { MjmlColumn } = mjmlComponents;
    expect(
      renderToMjml(
        <MjmlColumn borderRadius="5px dashed blue">Column1</MjmlColumn>
      )
    ).toBe('<mj-column border-radius="5px dashed blue">Column1</mj-column>');
  });

  it("object prop value type does not make it to the component", () => {
    const { MjmlSpacer } = mjmlComponents;
    expect(
      renderToMjml(
        // @ts-expect-error invalid prop value type of object on height
        <MjmlSpacer height={{ someValue: 10 }} />
      )
    ).toBe("<mj-spacer></mj-spacer>");
  });
});

import React from "react";

import {
  MjmlComment,
  MjmlConditionalComment,
  MjmlYahooStyle,
  MjmlTrackingPixel,
  MjmlHtml,
} from "../src/extensions";
import { renderToMjml } from "../src/utils/renderToMjml";

describe("extensions", () => {
  describe("simple comment", () => {
    it("should render", () => {
      const comment = (
        <MjmlComment>
          First, solve the problem. Then, write the code.
        </MjmlComment>
      );
      expect(renderToMjml(comment)).toBe(
        "<mj-raw><!--First, solve the problem. Then, write the code.--></mj-raw>"
      );
    });
    it("should not render if comment is empty", () => {
      expect(renderToMjml(<MjmlComment />)).toBe("");
      expect(renderToMjml(<MjmlComment>{""}</MjmlComment>)).toBe("");
      expect(renderToMjml(<MjmlComment> </MjmlComment>)).toBe("");
    });
  });

  describe("conditional comment", () => {
    it("should render", () => {
      const comment = (
        <MjmlConditionalComment>
          First, solve the problem. Then, write the code.
        </MjmlConditionalComment>
      );
      expect(renderToMjml(comment)).toBe(
        "<mj-raw><!--[if gte mso 9]>First, solve the problem. Then, write the code.<![endif]--></mj-raw>"
      );
    });
    it("should allow changing condition", () => {
      const comment = (
        <MjmlConditionalComment condition="if IE">
          First, solve the problem. Then, write the code.
        </MjmlConditionalComment>
      );
      expect(renderToMjml(comment)).toBe(
        "<mj-raw><!--[if IE]>First, solve the problem. Then, write the code.<![endif]--></mj-raw>"
      );
    });
    it("should not render if comment is empty", () => {
      expect(renderToMjml(<MjmlConditionalComment />)).toBe("");
      expect(
        renderToMjml(<MjmlConditionalComment>{""}</MjmlConditionalComment>)
      ).toBe("");
      expect(
        renderToMjml(<MjmlConditionalComment> </MjmlConditionalComment>)
      ).toBe("");
    });
  });

  describe("yahoo style", () => {
    it("should render", () => {
      expect(
        renderToMjml(<MjmlYahooStyle>{`a { color: blue; }`}</MjmlYahooStyle>)
      ).toBe(
        "<mj-raw><style>@media screen yahoo {a { color: blue; }}</style></mj-raw>"
      );
    });
  });

  describe("tracking pixel", () => {
    it("should render 1x1 raw image with provided src", () => {
      expect(renderToMjml(<MjmlTrackingPixel src={"tracking-pixel"} />)).toBe(
        '<mj-raw><img src="tracking-pixel" style="display:table;height:1px!important;width:1px!important;border:0!important;margin:0!important;padding:0!important" width="1" height="1"/></mj-raw>'
      );
    });
  });

  describe("html", () => {
    it("should allow rendering given HTML using mj-raw tag by default", () => {
      expect(renderToMjml(<MjmlHtml html="<div>hello World</div>" />)).toBe(
        "<mj-raw><div>hello World</div></mj-raw>"
      );
    });
    it("should allow rendering given HTML using specified tag", () => {
      expect(
        renderToMjml(<MjmlHtml tag="span" html="<div>hello World</div>" />)
      ).toBe("<span><div>hello World</div></span>");
    });
  });
});

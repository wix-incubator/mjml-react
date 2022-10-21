import { expect } from "chai";

import { namedEntityToHexCode } from "../src/utils/index";

describe("utils", () => {
  describe("namedEntityToHexCode", () => {
    it("should not replace incomplete entity", () => {
      expect(namedEntityToHexCode("&amp")).to.equal("&amp");
    });

    it("should not replace unknown entity", () => {
      expect(namedEntityToHexCode("&rambo;")).to.equal("&rambo;");
    });

    it("should not replace entity in hex code", () => {
      expect(namedEntityToHexCode("&#38;")).to.equal("&#38;");
    });

    it("should replace known entity to hex code", () => {
      expect(namedEntityToHexCode("&amp;")).to.equal("&#38;");
      expect(namedEntityToHexCode("&apos;")).to.equal("&#39;");
    });
  });
});

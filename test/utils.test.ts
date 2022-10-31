import { namedEntityToHexCode } from "../src/utils/index";

describe("utils", () => {
  describe("namedEntityToHexCode", () => {
    it("should not replace incomplete entity", () => {
      expect(namedEntityToHexCode("&amp")).toBe("&amp");
    });

    it("should not replace unknown entity", () => {
      expect(namedEntityToHexCode("&rambo;")).toBe("&rambo;");
    });

    it("should not replace entity in hex code", () => {
      expect(namedEntityToHexCode("&#38;")).toBe("&#38;");
    });

    it("should replace known entity to hex code", () => {
      expect(namedEntityToHexCode("&amp;")).toBe("&#38;");
      expect(namedEntityToHexCode("&apos;")).toBe("&#39;");
    });
  });
});

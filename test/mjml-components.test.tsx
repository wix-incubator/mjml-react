import { renderToMjml } from "../src/utils/renderToMjml";

import { mockMjmlReactTestData } from "./__mockData__/mockMjmlReactTestData";

/**
 * The test cases for this file are defined in mockMjmlReactTestData
 */
describe("Mjml Components", () => {
  test.each(Object.entries(mockMjmlReactTestData))("<%s />", (_, testCases) => {
    testCases.forEach(({ mjmlReact, expectedMjml }) => {
      expect(renderToMjml(mjmlReact)).toBe(expectedMjml);
    });
  });
});

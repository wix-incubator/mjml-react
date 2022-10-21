module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    project: "tsconfig-eslint.json",
  },
  env: {
    node: true,
    es6: true,
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "import",
    /* testing plugins */
    "jest",
    "jest-dom",
    "testing-library",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    /* eslint-rules */
    // default max complexity is 20, which appears to be a reasonable point to error
    complexity: "error",
    curly: "error",
    eqeqeq: ["error", "smart"],
    "no-alert": "error",
    "no-console": "error",
    "no-prototype-builtins": "off",
    "no-unused-vars": "off",
    "no-process-env": "error",

    /* typescript-eslint rules */
    "@typescript-eslint/adjacent-overload-signatures": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          IStringTMap: "Prefer Record<string, T>",
        },
      },
    ],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "no-public",
        overrides: { parameterProperties: "explicit" },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/no-var-requires": "off",

    /* react rules */
    "react/display-name": "off",
    "react/jsx-curly-brace-presence": ["error", { props: "never" }],
    "react/no-deprecated": "warn",
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    "react/prop-types": "off",
    "react/no-danger": "error",
    "react/self-closing-comp": "error",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
      },
    ],

    /* import rules */
    "import/no-unassigned-import": "error",
    "import/order": "off", // Use prettier for import order formatting
  },
  overrides: [
    {
      files: ["**/__test?(s)__/**", "**/__stories__/**"],
      rules: {
        "import/no-unassigned-import": "off",
      },
    },
    {
      files: ["**/?(*.)+(test).ts?(x)"],
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
      rules: {
        "jest/expect-expect": [
          "warn",
          {
            assertFunctionNames: ["expect*"],
            additionalTestBlockFunctions: [],
          },
        ],
        "jest/no-standalone-expect": [
          "error",
          { additionalTestBlockFunctions: ["afterEach"] },
        ],
      },
    },
    {
      files: ["test/**/*"],
      env: { jest: true },
      rules: {
        "no-undef": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "react/jsx-curly-brace-presence": "off",
      },
    },
    {
      files: ["**/?(*.)+(test).tsx"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
      rules: {
        "testing-library/prefer-user-event": "error",
      },
    },
    {
      files: ["src/mjml/*"],
      rules: {
        "react/function-component-definition": "off",
      },
    },
  ],
};

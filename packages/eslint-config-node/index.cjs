const jsExtensions = ["js", "jsx", "mjs", "cjs"];

/** @type {import('eslint').Linter.ConfigOverride} */
const jsConfigOverride = {
  env: { es2023: true, node: true },
  parserOptions: { ecmaVersion: 2022 },
  files: jsExtensions.map((ext) => `**/*.${ext}`),
  extends: ["eslint:recommended", "plugin:import/recommended", "prettier"],
  plugins: ["simple-import-sort"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["client", "server"].map((env) => `^\\u0000${env}-only$`), // Runtime environments
          ["^\\u0000[^\\.]"], // External side-effects
          ["^\\u0000~\\/"], // Internal side-effects
          ["^\\u0000\\.\\."], // Parent side-effects
          ["^\\u0000\\.[^\\.]"], // Relative side-effects
          ["\\u0000$"], // External types
          ["^~\\/.*\\u0000$"], // Internal types
          ["^\\.\\..*\\u0000$"], // Parent types
          ["^\\.[^\\.].*\\u0000$"], // Relative types
          ["^[^\\.]"], // External modules
          ["^~\\/"], // Internal modules
          ["^\\.\\."], // Parent modules
          ["^\\.[^\\.]"], // Relative modules
        ],
      },
    ],
    "simple-import-sort/exports": "error",
  },
};

const tsExtensions = jsExtensions.map((ext) => ext.replace("js", "ts"));

/** @type {import('eslint').Linter.ConfigOverride} */
const tsConfigOverride = {
  ...jsConfigOverride,
  parserOptions: { ...jsConfigOverride.parserOptions, project: true },
  settings: { "import/resolver": "typescript" },
  files: tsExtensions.map((ext) => `**/*.${ext}`),
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: {
    ...jsConfigOverride.rules,
    quotes: "off",
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
    "@typescript-eslint/consistent-type-imports": "error",
  },
};

/** @type {import('eslint').Linter.Config} */
module.exports = { overrides: [jsConfigOverride, tsConfigOverride] };

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:node/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  env: {
    browser: true,
    jest: true
  },
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    sourceType: "module",
    jsx: true,
    project: "./tsconfig.json"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"]
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "react": {
      "version": "detect"
    }
  },
  rules: {
    "no-console": "off",

    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/camelcase": ["error", { properties: "always", ignoreDestructuring: false }],
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-explicit-any": "off",

    "node/no-unsupported-features/es-syntax": "off",
    "node/no-missing-import": ["error", { tryExtensions: [".js", ".ts", ".tsx"] }],

    "prettier/prettier": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  },
  "overrides": [
    {
      "files": ["__tests__/**/*"],
      "rules": {
      "node/no-unpublished-import": "off",
      "node/no-missing-import": "off",
    }
  }]
}
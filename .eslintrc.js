module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: [
    "vue",
    "react",
    "typescript",
    "html",
    "modules-newline",
    "jsx-a11y",
    "vuejs-accessibility"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:jsx-a11y/strict",
    "plugin:vuejs-accessibility/recommended"
  ],
  rules: {
    "array-bracket-newline": [
      "warn", {
        "minItems": 1,
        "multiline": true
      }
    ],
    "arrow-parens": "off",
    "brace-style": [
      "warn", "stroustrup", {
        "allowSingleLine": false
      }
    ],
    "camelcase": "off",
    "comma-dangle": [
      "warn", {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "never"
      }
    ],
    "comma-spacing": [
      "warn", {
        "before": false,
        "after": true
      }
    ],
    "curly": [
      "warn", "all"
    ],
    "dot-notation": "off",
    "eol-last": "off",
    "eqeqeq": "off",
    "function-call-argument-newline": [
      "error", "never"
    ],
    "function-paren-newline": [
      "error", "never"
    ],
    "generator-star-spacing": "off",
    "import/extensions": "off",
    "import/first": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "indent": [
      "warn", 2
    ],
    "keyword-spacing": [
      "warn", {
        "before": true,
        "after": true
      }
    ],
    "key-spacing": [
      "error", {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "modules-newline/import-declaration-newline": "warn",
    "modules-newline/export-declaration-newline": "warn",
    "new-cap": "off",
    "no-console": process.env.VUE_APP_NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.VUE_APP_NODE_ENV === "production" ? "warn" : "off",
    "no-duplicate-imports": "warn",
    "no-dupe-keys": "warn",
    "no-multi-spaces": "warn",
    "no-prototype-builtins": "off",
    "no-return-assign": "off",
    "no-trailing-spaces": "warn",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-useless-constructor": "off",
    "no-useless-escape": "off",
    "no-var": "warn",
    "object-curly-newline": [
      "warn", {
        "ObjectExpression": {
          "multiline": true,
          "minProperties": 1
        },
        "ObjectPattern": {
          "multiline": true,
          "minProperties": 2
        },
        "ImportDeclaration": "always",
        "ExportDeclaration": {
          "multiline": true,
          "minProperties": 2
        }
      }
    ],
    "object-property-newline": "warn",
    "one-var": [
      "warn", "never"
    ],
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "prefer-const": "off",
    "prefer-promise-reject-errors": "off",
    "quotes": [
      "warn", "double"
    ],
    "semi": [
      "warn", "always"
    ],
    "sort-keys": "off",
    "sort-imports": "off",
    "space-before-function-paren": [
      "warn", "never"
    ],
    "space-infix-ops": [
      "warn", {
        "int32Hint": false
      }
    ],
    "space-in-parens": [
      "warn", "never"
    ],
    "vue/html-indent": [
      "warn", 2, {
        "attribute": 1,
        "baseIndent": 1,
        "closeBracket": 0,
        "alignAttributesVertically": false
      }
    ],
    "vue/max-attributes-per-line": [
      "warn", {
        "singleline": {
          "max": 1,
          "allowFirstLine": true
        },
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }
    ],
    "vue/singleline-html-element-content-newline": [
      "error", {
        "ignoreWhenNoAttributes": true,
        "ignoreWhenEmpty": true,
        "ignores": [
          "pre", "textarea"
        ]
      }
    ],
    "vue/html-closing-bracket-newline": [
      "error", {
        "singleline": "never",
        "multiline": "never"
      }
    ],
    "vue/mustache-interpolation-spacing": [
      "warn", "never"
    ],
    "vue/no-deprecated-filter": "warn",
    "vue/no-deprecated-slot-attribute": "off",
    "vue/no-unused-components": "warn",
    "vue/html-self-closing": "off",
    "vue/valid-v-bind": "warn",
    "vue/script-setup-uses-vars": "off"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};

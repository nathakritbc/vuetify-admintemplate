module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "vuetify",
    ".eslintrc-auto-import.json",
    "plugin:vue/vue3-recommended",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended",
    "plugin:case-police/recommended",
    "plugin:regexp/recommended",

    // 'plugin:unicorn/recommended',
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["vue", "regex", "regexp"],
  ignorePatterns: [
    "src/plugins/iconify/*.js",
    "node_modules",
    "dist",
    "*.d.ts",
    "vendor",
  ],
  rules: {
    "vue/valid-attribute-name": "error",

    "vue/no-parsing-error": [
      "error",
      {
        "abrupt-closing-of-empty-comment": true,
        "absence-of-digits-in-numeric-character-reference": true,
        "cdata-in-html-content": true,
        "character-reference-outside-unicode-range": true,
        "control-character-in-input-stream": true,
        "control-character-reference": true,
        "eof-before-tag-name": true,
        "eof-in-cdata": true,
        "eof-in-comment": true,
        "eof-in-tag": true,
        "incorrectly-closed-comment": true,
        "incorrectly-opened-comment": true,
        "invalid-first-character-of-tag-name": true,
        "missing-attribute-value": true,
        "missing-end-tag-name": true,
        "missing-semicolon-after-character-reference": true,
        "missing-whitespace-between-attributes": true,
        "nested-comment": true,
        "noncharacter-character-reference": true,
        "noncharacter-in-input-stream": true,
        "null-character-reference": true,
        "surrogate-character-reference": true,
        "surrogate-in-input-stream": true,
        "unexpected-character-in-attribute-name": true,
        "unexpected-character-in-unquoted-attribute-value": true,
        "unexpected-equals-sign-before-attribute-name": true,
        "unexpected-null-character": true,
        "unexpected-question-mark-instead-of-tag-name": true,
        "unexpected-solidus-in-tag": true,
        "unknown-named-character-reference": true,
        "end-tag-with-attributes": true,
        "duplicate-attribute": true,
        "end-tag-with-trailing-solidus": true,
        "non-void-html-element-start-tag-with-trailing-solidus": false,
        "x-invalid-end-tag": true,
        "x-invalid-namespace": true,
      },
    ],

    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

    // indentation (Already present in TypeScript)
    "comma-spacing": ["error", { before: false, after: true }],
    "key-spacing": ["error", { afterColon: true }],
    "n/prefer-global/process": ["off"],
    "sonarjs/cognitive-complexity": ["off"],

    "vue/first-attribute-linebreak": [
      "error",
      {
        singleline: "beside",
        multiline: "below",
      },
    ],

    // indentation (Already present in TypeScript)
    indent: ["error", 2],

    // Enforce trailing comma (Already present in TypeScript)
    "comma-dangle": ["error", "always-multiline"],

    // Enforce consistent spacing inside braces of object (Already present in TypeScript)
    "object-curly-spacing": ["error", "always"],

    // Enforce camelCase naming convention
    // 'camelcase': 'error',

    // Disable max-len
    "max-len": "off",

    // we don't want it
    semi: ["error", "never"],

    // add parens ony when required in arrow function
    "arrow-parens": ["error", "as-needed"],

    // add new line above comment
    "newline-before-return": "error",

    // add new line above comment
    "lines-around-comment": [
      "error",
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true,

        // We don't want to add extra space above closing SECTION
        ignorePattern: "!SECTION",
      },
    ],

    // Ignore _ as unused variable

    "array-element-newline": ["error", "consistent"],
    "array-bracket-newline": ["error", "consistent"],

    "vue/multi-word-component-names": "off",

    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "expression", next: "const" },
      { blankLine: "always", prev: "const", next: "expression" },
      { blankLine: "always", prev: "multiline-const", next: "*" },
      { blankLine: "always", prev: "*", next: "multiline-const" },
    ],

    // Plugin: eslint-plugin-import
    "import/prefer-default-export": "off",
    "import/newline-after-import": ["error", { count: 1 }],
    "no-restricted-imports": [
      "error",
      "vuetify/components",
      {
        name: "vue3-apexcharts",
        message: "apexcharts are auto imported",
      },
    ],

    // For omitting extension for ts files
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],

    // ignore virtual files
    "import/no-unresolved": [
      2,
      {
        ignore: [
          "~pages$",
          "virtual:generated-layouts",
          "#auth$",

          // Ignore vite's ?raw imports
          ".*?raw",
        ],
      },
    ],

    // Thanks: https://stackoverflow.com/a/63961972/10796681
    "no-shadow": "off",

    // Plugin: eslint-plugin-promise
    "promise/always-return": "off",
    "promise/catch-or-return": "off",

    // ESLint plugin vue
    "vue/block-tag-newline": "error",
    "vue/component-api-style": "error",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      { registeredComponentsOnly: false, ignores: ["/^swiper-/"] },
    ],
    "vue/custom-event-name-casing": [
      "error",
      "camelCase",
      {
        ignores: ["/^(click):[a-z]+((d)|([A-Z0-9][a-z0-9]+))*([A-Z])?/"],
      },
    ],
    "vue/define-macros-order": "error",
    "vue/html-comment-content-newline": "error",
    "vue/html-comment-content-spacing": "error",
    "vue/html-comment-indent": "error",
    "vue/match-component-file-name": "error",
    "vue/no-child-content": "error",
    "vue/require-default-prop": "off",

    "vue/no-duplicate-attr-inheritance": "error",
    "vue/no-empty-component-block": "error",
    "vue/no-multiple-objects-in-class": "error",
    "vue/no-reserved-component-names": "error",
    "vue/no-template-target-blank": "error",
    "vue/no-useless-mustaches": "error",
    "vue/no-useless-v-bind": "error",
    "vue/padding-line-between-blocks": "error",
    "vue/prefer-separate-static-class": "error",
    "vue/prefer-true-attribute-shorthand": "error",
    "vue/v-on-function-call": "error",
    "vue/no-restricted-class": ["error", "/^(p|m)(l|r)-/"],
    "vue/valid-v-slot": [
      "error",
      {
        allowModifiers: true,
      },
    ],

    // -- Extension Rules
    "vue/no-irregular-whitespace": "error",
    "vue/template-curly-spacing": "error",

    // -- Sonarlint
    "sonarjs/no-duplicate-string": "off",
    "sonarjs/no-nested-template-literals": "off",

    // -- Unicorn
    // 'unicorn/filename-case': 'off',
    // 'unicorn/prevent-abbreviations': ['error', {
    //   replacements: {
    //     props: false,
    //   },
    // }],

    // https://github.com/gmullerb/eslint-plugin-regex
    "regex/invalid": [
      "error",
      [
        {
          regex: "@/assets/images",
          replacement: "@images",
          message: "Use '@images' path alias for image imports",
        },
        {
          regex: "@/assets/styles",
          replacement: "@styles",
          message:
            "Use '@styles' path alias for importing styles from 'src/assets/styles'",
        },
        {
          regex: "@core/\\w",
          message: "You can't use @core when you are in @layouts module",
          files: {
            inspect: "@layouts/.*",
          },
        },
        {
          regex: "useLayouts\\(",
          message:
            "`useLayouts` composable is only allowed in @layouts & @core directory. Please use `useThemeConfig` composable instead.",
          files: {
            inspect: "^(?!.*(@core|@layouts)).*",
          },
        },
      ],

      // Ignore files
      ".eslintrc.cjs",
    ],

    /*eslint no-trailing-spaces: "error"*/
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: true,
      typescript: { project: "./jsconfig.json" },
    },
  },
};

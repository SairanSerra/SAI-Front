module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        "indent":["warn"],
        "react/jsx-indent": ["warn"],
        "react/jsx-filename-extension": "off",
        "react/function-component-definition": "off",
        "import/no-extraneous-dependencies": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "eol-last": 0,
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxEOF": 0
            }
        ],
        "linebreak-style": "off",
        "no-unused-expressions": "off",
        "react/jsx-props-no-spreading": "off",
        "no-param-reassign": "off",
        "no-useless-escape": "off",
        "no-restricted-globals": "off",
        "no-useless-return":"off",
        "no-mixed-operators":"off",
        "react/no-array-index-key": "off",
        "no-self-compare":"off",
        "camelcase":"off",
        "no-new": "off",
        "react/no-unstable-nested-components":"off",
        "no-unused-vars":"off",
        "react/require-default-props": "off",
        "react/jsx-no-useless-fragment":"off",
        "jsx-a11y/label-has-associated-control":"off",
        "jsx-a11y/anchor-is-valid":"off"
    },
}

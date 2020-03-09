module.exports = {
    extends: 'erb/typescript',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        useJSXTextNode: true,
        project: "./tsconfig.json",
        tsconfigRootDir: "./",
    },
    rules: {
        // A temporary hack related to IDE not resolving correct package.json
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
    },
    settings: {
        'import/resolver': {
            // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
            node: {},
        },
    },
};

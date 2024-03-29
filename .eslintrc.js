module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
                '**/src/**/*.test.{ts,tsx}',
                '*.stories.@(ts|tsx|js|jsx|mjs|cjs)',
            ],
            // отключить правило переводов в тестах
            rules: {
                'i18next/no-literal-string': 'off',
                // example of overriding a rule
                'storybook/hierarchy-separator': 'error',
                // example of disabling a rule
                'storybook/default-exports': 'off',
            },
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react-hooks',
        '@typescript-eslint',
        'react',
        'i18next',
        //'custom-eslint-plugin'
    ],
    globals: {
        __dirname: true,
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'role',
                    'data-testid',
                    'id',
                    'to',
                    'target',
                    'justify',
                    'align',
                    'direction',
                    'gap',
                ],
            },
        ],
        'no-undef': 'off',
        'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
        //'custom-eslint-plugin/path-checker': 'error'
        // '@typescript-eslint/no-explicit-any': 'off'
    },
};

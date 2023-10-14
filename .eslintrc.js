module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}',
                '**/src/**/*.test.{ts,tsx}',
                '*.stories.@(ts|tsx|js|jsx|mjs|cjs)'
            ],
            // отключить правило переводов в тестах
            'rules': {
                'i18next/no-literal-string': 'off',
                // example of overriding a rule
                'storybook/hierarchy-separator': 'error',
                // example of disabling a rule
                'storybook/default-exports': 'off',
            },
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'react',
        'i18next'
    ],
    'globals': {
        '__dirname': true
    },
    'rules': {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'i18next/no-literal-string': [
            'error', {
                markupOnly: true,
                ignoreAttribute: ['data-testid']
            },
        ]
    }
};

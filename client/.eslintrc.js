module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react-hooks/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        project: './tsconfig.json',
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'prettier'
    ],
    'rules': {
        'indent': ['error', 2, { SwitchCase: 1 }],
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
            'never'
        ],
        'react/react-in-jsx-scope': 0,
        'react/prop-types': 0,
        'react/jsx-key': 2,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': ['error'],
        'prettier/prettier': [
        'error',
        {
            singleQuote: true,
            jsxSingleQuote: true,
            trailingComma: 'none',
            semi: false
        }
        ],
        'object-shorthand': ['error', 'always']
    }
}

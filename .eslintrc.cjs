module.exports = {
	env: {
		es2021: true,
	},
	plugins: ['import', 'regexp', 'sonarjs'],
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/recommended',
		'plugin:regexp/recommended',
	],
	parser: '@typescript-eslint/parser',
	ignorePatterns: ['.eslintrc.cjs', '*.config.[jt]s', '*.d.ts'],
	parserOptions: {
		project: ['./tsconfig.eslint.json'],
		ecmaVersion: 'latest',
		sourceType: 'module',
		parser: {
			js: '@typescript-eslint/parser', // это не ошибка, странно, но так и должно быть
			ts: '@typescript-eslint/parser',
		}
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [['@', './src/']],
				extensions: ['.ts', '.js', '.tsx'],
			},
			node: {
				"extensions": [".js", ".jsx", ".ts", ".tsx"]
			}
		},

		settings: {
			react: {
				version: 'latest',
			},
		},
	},
	rules: {
		// sonar bug detection
		'sonarjs/no-all-duplicated-branches': 'error',
		'sonarjs/no-element-overwrite': 'error',
		'sonarjs/no-empty-collection': 'error',
		'sonarjs/no-extra-arguments': 'error',
		'sonarjs/no-identical-conditions': 'error',
		'sonarjs/no-identical-expressions': 'error',
		'sonarjs/no-ignored-return': 'error',
		'sonarjs/no-one-iteration-loop': 'error',
		'sonarjs/no-use-of-empty-return-value': 'error',
		'sonarjs/non-existent-operator': 'error',

		// sonar code smell detection
		'sonarjs/no-collapsible-if': 'error',
		'sonarjs/no-gratuitous-expressions': 'error',
		'sonarjs/no-identical-functions': 'error',
		'sonarjs/no-inverted-boolean-check': 'error',
		'sonarjs/no-nested-switch': 'error',
		'sonarjs/prefer-single-boolean-return': 'error',

		'unicode-bom': 'off',
		'linebreak-style': 'off',
		camelcase: 'off',
		'no-console': [process.env.MODE === 'production' ? 'warn' : 'warn', { allow: ['warn', 'error'] }],
		'no-debugger': process.env.MODE === 'production' ? 'error' : 'warn',
		'no-bitwise': 'off',
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: [
					'state',
					'el',
					'app',
					'vm',
				],
			},
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: ['return', 'const', 'let', 'var', 'block-like', 'if', 'multiline-expression'],
			},
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var', 'block-like', 'if', 'multiline-expression'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['singleline-const', 'singleline-let', 'singleline-var'],
				next: ['singleline-const', 'singleline-let', 'singleline-var'],
			},
		],

		'import/extensions': ['error', 'ignorePackages', {
			js: 'never',
			ts: 'never',
			json: 'never',
			jsx: 'never',
			tsx: 'never',
		}],

		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': 'off',
		"import/order": [
			"error",
			{
				"groups": [
					"builtin",
					"external",
					"internal",
					'unknown',
					'parent',
					'sibling',
					"index",
					"object",
					"type"
				],
				// 'newlines-between': 'always', - конфликтует
				"warnOnUnassignedImports": true,
				pathGroupsExcludedImportTypes: ['@umschool']
			}
		],

		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-empty-function': 'off',

		'no-unreachable': 'error',
		'no-unused-labels': 'error',
		'no-fallthrough': 'error',
		'no-useless-constructor': 'off',
		'consistent-return': 'error',
		'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],

		'@typescript-eslint/ban-ts-comment': ['error', {
			'ts-expect-error': 'allow-with-description',
			'ts-ignore': 'allow-with-description',
		}],
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/consistent-generic-constructors': 'error',
		'@typescript-eslint/space-infix-ops': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'comma',
					requireLast: true,
				},
				singleline: {
					delimiter: 'comma',
					requireLast: true,
				},
				overrides: {
					interface: {
						multiline: {
							delimiter: 'semi',
							requireLast: true,
						},
					},
				},
			},
		],
		'max-params': 'error',
		"regexp/no-obscure-range": ["error",
			{
				allowed: ['alphanumeric', 'а-я', 'А-Я']
			}
		]
	},
	overrides: [
		{
			files: '**/*.{j,t}s',
			rules: {
				'max-len': ['warn', {
					code: 100,
					ignorePattern: '^import .*',
					ignoreUrls: true,
					ignoreRegExpLiterals: true,
					ignoreStrings: true,
					ignoreComments: true,
				}],
			},
		},

		{
			files: '**/*.ts',
			rules: {
				'@typescript-eslint/no-unused-vars': 'error',
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/no-empty-function': 'error',
				'@typescript-eslint/explicit-function-return-type': 'error',
			},
		},
	],
};

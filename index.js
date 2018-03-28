module.exports = {
	"defaultSeverity": "error",
	"linterOptions": {
		"exclude": ["node_modules"],
		"typeCheck": true
	},
	"extends": ["tslint-config-prettier", "tslint-eslint-rules"],
	"rules": {
		"adjacent-overload-signatures": true,
		"await-promise": true,
		"ban-comma-operator": true,	// check
		"ban-types": [
			true,
			["String", "Use 'string' instead."],
			["Object", "Use 'object' instead."]
		],
		"ban": [false],
		"curly": [true, "as-needed"],
		"cyclomatic-complexity": [true, 3],	// check
		"deprecation": true,
		"eofline": true,
		"forin": false,
		"import-blacklist": [true, "lodash", "rxjs"],
		"indent": [true, "tabs"],
		"label-position": true,	// check
		"linebreak-style": false,	// CHECK
		"max-classes-per-file": [true, 1, "exclude-class-expressions"],
		"max-file-line-count": [true, 200],
		"max-line-length": [true, {
			"limit": 120,
			"ignore-pattern": "^import "
		}],
		"member-access": [true, "check-accessor", "check-parameter-property"],
		"member-ordering": [true, { "order": "fields-first" }],
		"no-any": true,
		"no-arg": true,
		"no-bitwise": false,	// check
		"no-conditional-assignment": true,
		"no-console": [true, "error"],
		"no-construct": true,
		"no-debugger": true,
		"no-default-export": false,
		"no-duplicate-imports": true,
		"no-duplicate-super": true,
		"no-duplicate-switch-case": true,
		"no-duplicate-variable": [true, "check-parameters"],
		"no-dynamic-delete": true,
		"no-empty": true,
		"no-eval": true,
		"no-empty-interface": true,
		"no-floating-promises": true,	// check
		"no-for-in-array": true,
		"no-implicit-dependencies": true,
		"no-import-side-effect": [
			true,
			{
				"ignore-module": "\.sass"
			}
		],  // check
		"no-inferrable-types": [true, "ignore-params", "ignore-properties"],
		"no-inferred-empty-object-type": true,
		"no-internal-module": true,	 // assign
		"no-invalid-template-strings": true,
		"no-invalid-this": [true, "check-function-in-method"],	// check
		"no-magic-numbers": true,
		"no-mergeable-namespace": true,
		"no-misused-new": true,
		"no-namespace": [true, "allow-declarations"],
		"no-non-null-assertion": true,
		"no-null-keyword": false,
		"no-object-literal-type-assertion": false,	// CHECK
		"no-parameter-reassignment": true,
		"no-require-imports": true,
		"no-return-await": true,	// check
		"no-reference": true,
		"no-shadowed-variable": true,	// CHECK
		"no-sparse-arrays": true,
		"no-string-literal": true,	// check
		"no-string-throw": true,
		"no-submodule-imports": false,
		"no-switch-case-fall-through": true,
		"no-this-assignment": [true, {
			"allow-destructuring": true
		}],
		"no-unbound-method": [true, "ignore-static"],
		"no-unnecessary-class": [false],	// CHECK
		"no-unnecessary-type-assertion": [true, "AnyDuringMigration"], // check
		"no-unsafe-any": true,	// check
		"no-unsafe-finally": true,	// check
		"no-unused-expression": [
			true,
			"allow-new",
			"allow-fast-null-checks"
		],	// check
		"no-unused-variable": [true, "check-parameters"],	// check
		"no-use-before-declare": true,
		"no-var-keyword": true,	// asign
		"no-var-requires": true,	// assign
		"no-void-expression": true,
		"only-arrow-functions": true,
		"prefer-conditional-expression": false,
		"prefer-const": true,
		"prefer-object-spread": false,
		"prefer-for-of": true,	// check
		"prefer-readonly": true,
		"promise-function-async": true,	// check
		"radix": false,
		"restrict-plus-operands": true,	// check
		"strict-boolean-expressions": false,	// check
		"strict-type-predicates": true,	// check
		"switch-default": true,
		"trailing-comma": {
			"options": {
				"multiline": "never",
				"singleline": "never",
			},
		},	// CHECK
		"triple-equals": [true, "allow-null-check", "allow-undefined-check"],
		"typedef": [true,
			"call-signature",
			"arrow-call-signature",
			"parameter",
			"arrow-parameter",
			"variable-declaration",
			"property-declaration",
			"member-variable-declaration"
		],	// check
		"typedef-whitespace": {
			"options": [
				{
					"call-signature": "nospace",
					"index-signature": "nospace",
					"parameter": "nospace",
					"property-declaration": "nospace",
					"variable-declaration": "nospace",
				},
				{
					"call-signature": "onespace",
					"index-signature": "onespace",
					"parameter": "onespace",
					"property-declaration": "onespace",
					"variable-declaration": "onespace",
				},
			],
		},	// check
		"typeof-compare": true,
		"unified-signatures": true,
		"use-default-type-parameter": false,
		"use-isnan": true,

		"ter-indent": [true, "tab", { "SwitchCase": 1 }]
	}
//	"rules": {},
//	"rulesDirectory": []
};
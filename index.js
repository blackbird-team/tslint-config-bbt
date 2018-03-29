module.exports = {
	"defaultSeverity": "error",
	"linterOptions": {
		"exclude": ["node_modules"],
		"typeCheck": true
	},
	"extends": ["tslint-eslint-rules"],
	"rules": {
		"adjacent-overload-signatures": true,
		"align": {
			"options": [ "members", "statements" ]
		},
		"array-type": [true, "array"],
		"arrow-parens": [true, "ban-single-arg-parens"],	// CHECK
		"arrow-return-shorthand": true,	// CHECK
		"await-promise": true,
		"ban-comma-operator": true,	// check
		"ban-types": [
			true,
			["String", "Use 'string' instead."],
			["Object", "Use 'object' instead."]
		],
		"ban": [false],
		"binary-expression-operand-order": true,
		"callable-types": true,
		"class-name": true,
		"comment-format": [true, "check-space", "check-uppercase"],	// CHECK
		"completed-docs": true,	// CHECK
		"curly": [true, "as-needed"],
		"cyclomatic-complexity": [true, 20],
		"deprecation": true,
		"encoding": true,
		"eofline": true,
		"file-header": [false],
		"forin": false,
		"import-blacklist": [true, "lodash", "rxjs"],
		"import-spacing": true,
		"indent": [true, "tabs"],
		"interface-name": [true, "always-prefix"],
		"interface-over-type-literal": true,
		"jsdoc-format": [true, "check-multiline-start"],	// CHECK
		"label-position": true,	// check
		"linebreak-style": false,	// CHECK
		"match-default-export-name": false,
		"max-classes-per-file": [true, 1, "exclude-class-expressions"],
		"max-file-line-count": [true, 200],
		"max-line-length": [true, {
			"limit": 120,
			"ignore-pattern": "^import "
		}],
		"member-access": [true, "check-accessor", "check-parameter-property"],
		"member-ordering": [true, { "order": "fields-first" }],
		"newline-before-return": true,
		"newline-per-chained-call": false,
		"new-parens": true,
		"no-angle-bracket-type-assertion": true,
		"no-any": true,
		"no-arg": true,
		"no-bitwise": false,	// check
		"no-boolean-literal-compare": true,
		"no-conditional-assignment": true,
		"no-consecutive-blank-lines": [true, 1],
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
		"no-inferrable-types": false,
		"no-inferred-empty-object-type": true,
		"no-internal-module": true,	 // assign
		"no-invalid-template-strings": true,
		"no-invalid-this": [true, "check-function-in-method"],	// check
		"no-irregular-whitespace": true,
		"no-magic-numbers": true,
		"no-mergeable-namespace": true,
		"no-misused-new": true,
		"no-namespace": [true, "allow-declarations"],
		"no-non-null-assertion": true,
		"no-null-keyword": false,
		"no-object-literal-type-assertion": false,	// CHECK
		"no-parameter-properties": true,
		"no-parameter-reassignment": true,
		"no-require-imports": true,
		"no-redundant-jsdoc": true,
		"no-return-await": true,	// check
		"no-reference": true,	// check
		"no-reference-import": true,	// check
		"no-shadowed-variable": true,	// CHECK
		"no-sparse-arrays": true,
		"no-string-literal": true,	// check
		"no-string-throw": true,
		"no-submodule-imports": false,
		"no-switch-case-fall-through": true,
		"no-this-assignment": [true, {
			"allow-destructuring": true
		}],
		"no-trailing-whitespace": true,	// CHECK
		"no-unbound-method": [true, "ignore-static"],
		"no-unnecessary-callback-wrapper": true,
		"no-unnecessary-class": [false],	// CHECK
		"no-unnecessary-initializer": true,
		"no-unnecessary-type-assertion": [true, "AnyDuringMigration"], // check
		"no-unnecessary-qualifier": true,	// CHECK
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
		"number-literal-format": true,
		"object-literal-key-quotes": [true, "as-needed"],	// CHECK
		"object-literal-shorthand": true,	// CHECK
		"one-line": [true, "check-open-brace", "check-catch", "check-else", "check-finally", "check-whitespace"],
		"one-variable-per-declaration": [true, "ignore-for-loop"],
		"only-arrow-functions": true,
		"ordered-imports": [false],	// CHECK
		"prefer-conditional-expression": false,
		"prefer-const": true,
		"prefer-object-spread": false,
		"prefer-method-signature": true,
		"prefer-function-over-method": false,	// check
		"prefer-for-of": true,	// check
		"prefer-readonly": true,
		"prefer-switch": true,
		"prefer-template": [true, "allow-single-concat"],	// CHECK
		"promise-function-async": true,	// check
		"quotemark": [true, "double", "avoid-escape"],	// CHECK
		"radix": false,
		"restrict-plus-operands": true,	// check
		"return-undefined": true,
		"semicolon": [true, "always", "ignore-bound-class-methods", "ignore-interfaces"],
		"space-before-function-paren": {
			"options": {
				"anonymous": "never",
				"asyncArrow": "always",
				"constructor": "never",
				"method": "never",
				"named": "never"
			}
		},
		"space-within-parens": [true, 0],
		"strict-boolean-expressions": false,	// check
		"strict-type-predicates": true,	// check
		"switch-default": true,
		"switch-final-break": [true, "always"],
		"trailing-comma": {
			"options": {
				"multiline": "never",
				"singleline": "never",
			},
		},	// CHECK
		"triple-equals": [true, "allow-null-check", "allow-undefined-check"],
		"type-literal-delimiter": true,	// check
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
		"typeof-compare": false,	// deprecated
		"unified-signatures": true,
		"use-default-type-parameter": false,
		"use-isnan": true,
		"variable-name": [true, "ban-keywords", "check-format", "allow-leading-underscore"],
		"whitespace": [true,
			"check-branch",
			"check-decl",
			"check-operator",
			"check-module",
			"check-preblock",
			"check-separator",
			"check-rest-spread",
			"check-type",
			"check-typecast",
			"check-type-operator"
		],	// CHECK

		// Eslint
		"no-constant-condition": true,
		"no-control-regex": true,
		"no-duplicate-case": true,	// CHECK assign
		"no-empty-character-class": true,	// check
		"no-ex-assign": true,
		"no-extra-boolean-cast": true,
		"no-extra-semi": true,
		"no-inner-declarations": [
			true,
			"functions"
		],	// CHECK
		"no-invalid-regexp": true,
		"ter-no-irregular-whitespace": [true],
		"no-regex-spaces": true,
		"ter-no-sparse-arrays": [true],	// CHECK assign
		"no-unexpected-multiline": true,	// CHECK assign
		"ter-no-proto": true,
		"ter-no-script-url": true,
		"ter-no-self-compare": true,
		"handle-callback-err": [true, "^(err|error|anySpecificError)$"],	// CHECK
		"array-bracket-spacing": [true, "as-needed"],
		"block-spacing": [
			true,
			"always"
		],	// CHECK assign
		"ter-computed-property-spacing": [true],
		"ter-func-call-spacing": [true],
		"ter-no-mixed-spaces-and-tabs": { "type": "tabs" },
		"object-curly-spacing": [
			true,
			"always"
		],
		"space-in-parens": [true, "never"],
		"ter-no-tabs": false,
		"ter-arrow-body-style": [true, "always"],
		"ter-arrow-parens": [true, "as-needed"],	// CHECK assign
		"ter-arrow-spacing": [true],	// CHECK assign
		"ter-prefer-arrow-callback": [true],	// CHECK assign
		"ter-indent": [true, "tab", { "SwitchCase": 1 }]
	}
//	"rules": {},
//	"rulesDirectory": []
};
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
		"arrow-parens": [true],
		"arrow-return-shorthand": [true, "multiline"],
		"await-promise": true,
		"ban-comma-operator": [true],	// Duplicate check for some situation as TS2695
		"ban-types": [
			true,
			["String", "Use 'string' instead."],
			["Object", "Use 'object' instead."]
		],
		"ban": [false],
		"binary-expression-operand-order": true,
		"callable-types": true,
		"class-name": true,
		"comment-format": [true, "check-space", "check-uppercase"],
		"completed-docs": [true],
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
		"jsdoc-format": [true, "check-multiline-start"],
		"label-position": true,
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
		"newline-before-return": false,
		"newline-per-chained-call": false,
		"new-parens": true,
		"no-angle-bracket-type-assertion": true,
		"no-any": true,
		"no-arg": true,
		"no-bitwise": true,
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
		"no-floating-promises": true,
		"no-for-in-array": true,
		"no-implicit-dependencies": false, // There is no support for absolute paths
		"no-import-side-effect": [
			true,
			{
				"ignore-module": "\.sass"
			}
		],
		"no-inferrable-types": false,
		"no-inferred-empty-object-type": true,
		"no-internal-module": true,
		"no-invalid-template-strings": true,
		"no-invalid-this": [true, "check-function-in-method"],
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
		"no-redundant-jsdoc": false,	// We are use TypeDoc
		"no-return-await": true,
		"no-reference": true,
		"no-reference-import": true,
		"no-shadowed-variable": true,
		"no-sparse-arrays": true,
		"no-string-literal": true,
		"no-string-throw": true,
		"no-submodule-imports": false,
		"no-switch-case-fall-through": true,
		"no-this-assignment": [true, {
			"allow-destructuring": true
		}],
		"no-trailing-whitespace": [true, "ignore-jsdoc", "ignore-blank-lines"],
		"no-unbound-method": [true, "ignore-static"],
		"no-unnecessary-callback-wrapper": true,
		"no-unnecessary-class": [false],	// CHECK
		"no-unnecessary-initializer": true,
		"no-unnecessary-type-assertion": [true, "AnyDuringMigration"], // check
		"no-unnecessary-qualifier": true,
		"no-unsafe-any": true,	// check
		"no-unsafe-finally": true,
		"no-unused-expression": [ true, "allow-new", "allow-fast-null-checks" ],
		"no-unused-variable": [true, "check-parameters"],
		"no-use-before-declare": true,
		"no-var-keyword": true,
		"no-var-requires": false,	// Duplication no-require-imports
		"no-void-expression": true,
		"number-literal-format": true,
		"object-literal-key-quotes": [true, "as-needed"],
		"object-literal-shorthand": [true, "always"],
		"one-line": [true, "check-open-brace", "check-catch", "check-else", "check-finally", "check-whitespace"],
		"one-variable-per-declaration": [true, "ignore-for-loop"],
		"only-arrow-functions": true,
		"ordered-imports": [false],
		"prefer-conditional-expression": false,
		"prefer-const": true,
		"prefer-object-spread": false,
		"prefer-method-signature": true,
		"prefer-function-over-method": false,	// check
		"prefer-for-of": true,
		"prefer-readonly": true,
		"prefer-switch": true,
		"prefer-template": [true, "allow-single-concat"],
		"promise-function-async": true,
		"quotemark": [true, "double", "avoid-escape"],
		"radix": false,
		"restrict-plus-operands": false,	// Partially overlapped by the rule typedef
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
		"strict-boolean-expressions": [true, "allow-string", "allow-undefined-union", "allow-mix", "allow-null-union"],
		"strict-type-predicates": true,
		"switch-default": true,
		"switch-final-break": [true, "always"],
		"trailing-comma": {
			"options": {
				"multiline": "never",
				"singleline": "never",
			},
		},
		"triple-equals": [true, "allow-null-check", "allow-undefined-check"],
		"type-literal-delimiter": true,	// Not used because "interface-over-type-literal" is enabled
		"typedef": [true,
			"call-signature",
			"arrow-call-signature",
			"parameter",
			"arrow-parameter",
			"property-declaration",
			"member-variable-declaration"
		],
		"typedef-whitespace": [true,
			{
				"call-signature": "nospace",
				"index-signature": "nospace",
				"parameter": "nospace",
				"property-declaration": "nospace",
				"variable-declaration": "nospace"
			},
			{
				"call-signature": "onespace",
				"index-signature": "onespace",
				"parameter": "onespace",
				"property-declaration": "onespace",
				"variable-declaration": "onespace"
			}
		],
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
		],

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
		"ter-arrow-body-style": [true, "newer"],
		"ter-arrow-parens": [true, "as-needed"],	// CHECK assign
		"ter-arrow-spacing": [true],	// CHECK assign
		"ter-prefer-arrow-callback": [true],	// CHECK assign
		"ter-indent": [true, "tab", { "SwitchCase": 1 }]
	}
//	"rules": {},
//	"rulesDirectory": []
};
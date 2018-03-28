module.exports = {
	"defaultSeverity": "error",
	"linterOptions": {
		"exclude": ["node_modules"]
	},
	"extends": ["tslint-config-prettier", "tslint-eslint-rules"],
	"rules": {
		"indent": [true, "tabs"],
		"ter-indent": [true, "tab", { "SwitchCase": 1 }]
	}
//	"rules": {},
//	"rulesDirectory": []
};
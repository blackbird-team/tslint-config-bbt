# tslint-config-bbt

TSLint Config for TypeScript used by BlackBird Team

## Install
```cmd
npm install --save-dev tslint tslint-config-bbt
```

```cmd
npm i -D tslint-config-bbt
```

## Usage
```eslint
{
	...
	"extends": [ "tslint-config-bbt" ]
	...
}
```

## Includes

[tslint-config-prettier](https://github.com/alexjoverm/tslint-config-prettier)

[tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules)


```eslint
{
	"defaultSeverity": "error",
	"linterOptions": {
		"exclude": [ "node_modules" ]
	},
	"extends": [ "tslint-config-prettier", "tslint-eslint-rules" ]
}
```

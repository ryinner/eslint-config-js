module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "prefer-const": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-object-spread": "warn",
        "prefer-template": "error",
        "for-direction": "error",
        "no-duplicate-imports": "error",
        "no-promise-executor-return": "error",
        "no-self-compare": "error",
        "no-template-curly-in-string": "error",
        "arrow-body-style": ["error", "as-needed"],
        "no-alert": "error",
        "no-proto": "error",
        "no-var": "error",
        "no-tabs": "error",
        "indent": ["error", 4, {"SwitchCase": 1}],
        "array-bracket-spacing": "warn",
        "no-multi-spaces": "warn",
        "brace-style": ["error", "1tbs", {"allowSingleLine": true}],
        "comma-spacing": "warn",
        "func-call-spacing": ["error", "never"],
        "implicit-arrow-linebreak": ["warn", "beside"],
        "no-multiple-empty-lines": "error"
    }
}

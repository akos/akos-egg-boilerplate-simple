module.exports = {
  "root": true,
  "extends": "vusion/all",
  "env": {
    "browser": true,
    "node": true
  },
  "globals": {
    "SUB_ROUTES_RE": true
  },
  "rules": {
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
    "no-debugger": ["error"],
    "no-duplicate-imports": ["error"],
    "camelcase": ["error", { "properties": "never" }],
    "new-cap": [ "error", { "newIsCap": true, "properties": false }],
    "vue/no-unused-components": [2],
    "vue/html-indent": ["error", 4, { "alignAttributesVertically": false }],
    "vue/no-use-v-if-with-v-for": [0],
    "require-await": [0],
    "camelcase": [0],
    "new-cap": [0],
    "no-return-await": [0],
    "require-atomic-updates": [0]
  }
};

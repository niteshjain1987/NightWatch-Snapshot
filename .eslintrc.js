module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    "node": true,
    "mocha": true
  },
  'extends': '',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    "semi": [2, "always"],

    "no-console": [2, { allow: ["error","debug"] }],

    "no-duplicate-case": 2,

    "no-empty":1,

    "no-extra-semi":2,

    "array-callback-return":2,

    "block-scoped-var":2,

    "default-case":2,

    "no-alert":2,

    "no-empty-function":2,

    "no-eq-null": 2,

    "no-loop-func": 2,

    "no-magic-numbers": [2, { "ignore": [0,1,-1], "ignoreArrayIndexes": true } ]
  }
}

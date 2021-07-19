module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
      "class-methods-use-this": "off",
      "no-param-reassing": "off",
      "camelcase": "off",
      "no-underscore-dangle": "off",
      "no-unused-vars": ["error", {"argsIgnorePattern": "next" }]
  },
};

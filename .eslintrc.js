module.exports = {
  root: true,
  env: {
    'jest/globals': true,
  },
  // ignorePatterns: ['**/__tests__/**'],
  plugins: ['node', 'jest'],
  extends: 'next/core-web-vitals',
  rules: {
    'react/display-name': 1,
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 1,
    '@next/next/no-img-element': 0,
    'no-undef': 2,
    'no-unused-vars': 1,
    'jest/no-unused-vars': 0,
  },
}

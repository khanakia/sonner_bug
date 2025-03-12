/** @type {import('prettier').Config} */

module.exports = {
  semi: false,
  bracketSpacing: true,
  singleQuote: true,
  bracketSameLine: true,
  printWidth: 80,
  trailingComma: 'es5',
  htmlWhitespaceSensitivity: 'ignore',
  attributeGroups: ['$DEFAULT', '^data-'],
  tabWidth: 2,
  avoidEscape: true,
  endOfLine: 'auto',
}

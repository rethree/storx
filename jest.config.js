module.exports = {
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  collectCoverageFrom: ['lib/**/*.{ts,tsx}', '!lib/src/index.ts'],
  testPathIgnorePatterns: ['/dist', '/lib/index'],
  testRegex: '\\.test\\.ts'
};

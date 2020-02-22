module.exports = {
  moduleNameMapper: {
    '^@app/(.+)': '<rootDir>/src/app/$1',
  },
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.js'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setupTests.js'
  ]
}
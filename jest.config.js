// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Map @/ to the project root
    '^react-hook-form$': '<rootDir>/node_modules/react-hook-form/dist/index.cjs'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@testing-library|react-hook-form)/)'
  ],
  testMatch: [
    '<rootDir>/**/__test__/**/*.{js,jsx,ts,tsx}', // Look for tests anywhere under root in __test__
    '<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}' // Look for tests anywhere under root with .spec or .test
  ],
};
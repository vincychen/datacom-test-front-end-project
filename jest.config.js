module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  };
export default {
  bail: 5,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  roots: ['src'],
  moduleNameMapper: {
    '^@/(.*)$': ['<rootDir>/src/$1'],
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  slowTestThreshold: 6,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'jest-esbuild',
    '^.+\\.ts?$': 'jest-esbuild',
  },
};

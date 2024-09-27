export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js'],
  modulePathIgnorePatterns: ['<rootDir>/__tests__/helpers'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
}

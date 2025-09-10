import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node', // Running tests in Node.js environment
    coverage: {
      provider: 'v8', // Use v8 for coverage
      reporter: ['text', 'json', 'html'], // Coverage reporters
      lines: 90, // Enforce 90% coverage for lines
      functions: 90, // Enforce 90% coverage for functions
      branches: 90, // Enforce 90% coverage for branches
      statements: 90, // Enforce 90% coverage for statements
    },
  },
});

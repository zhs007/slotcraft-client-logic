# Slotcraft Client Logic - Developer Documentation

This document provides a comprehensive guide for developers working on the `slotcraft-client-logic` project.

## 1. Project Overview

`slotcraft-client-logic` is a TypeScript-based library that provides the core logic for the Slotcraft game client. It is designed to be lightweight, and easily integrated into any modern web framework, particularly Vite-based projects.

## 2. Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/zhs007/slotcraft-client-logic.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd slotcraft-client-logic
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## 3. Development Workflow

### Building the Project

To compile the TypeScript code into JavaScript, run the following command:

```bash
npm run build
```

This will generate the compiled output in the `dist` directory.

### Running Tests

This project uses [Vitest](https://vitest.dev/) for unit testing. To run the tests, use the following command:

```bash
npm test
```

### Test Coverage

To run the tests and generate a coverage report, use the following command:

```bash
npm run coverage
```

The coverage report will be generated in the `coverage` directory. The project is configured to enforce a 90% coverage minimum.

## 4. Project Structure

- `src/`: Contains the TypeScript source code for the library.
- `test/`: Contains the unit tests for the source code.
- `dist/`: Contains the compiled JavaScript output and type declarations.
- `jules/`: Contains documents related to the project plan and reports.
- `.github/workflows/`: Contains the GitHub Actions CI configuration.
- `package.json`: Defines the project metadata, dependencies, and scripts.
- `tsconfig.json`: The TypeScript compiler configuration.
- `vitest.config.ts`: The Vitest configuration.

## 5. Key Design Decisions and Solutions

### Test Coverage Provider

- **Problem**: During initial setup, the `npm run coverage` command failed when using `c8` as the coverage provider.
- **Solution**: The issue was resolved by switching to the `v8` coverage provider and installing the `@vitest/coverage-v8` package. This ensures stable and accurate coverage reporting.

### Module System

The project is configured to use ES Modules (`"type": "module"` in `package.json`). This allows for modern JavaScript features and better tree-shaking, which helps to reduce the final bundle size. The `exports` field in `package.json` is configured to ensure proper module resolution for both `import` and `require`.

## 6. Continuous Integration (CI)

The project uses GitHub Actions for CI. The workflow is defined in `.github/workflows/ci.yml`. The CI pipeline is triggered on every push and pull request to the `main` branch. It installs dependencies and runs the tests with coverage checks to ensure code quality.

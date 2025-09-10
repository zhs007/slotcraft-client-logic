# Plan for Initializing the Slotcraft Frontend Logic Library

This document outlines the plan to initialize the `slotcraft` frontend logic library project.

## 1. Understand the Goal

The primary goal is to set up a new Node.js project that will serve as the core logic library for a slot machine game. The project must be written in TypeScript, have a robust testing suite using Vitest with high coverage, and be easily consumable by a Vite-based frontend application. It also requires a CI/CD pipeline using GitHub Actions.

## 2. Task Decomposition

### Step 1: Project Initialization
- Create a `package.json` file using `npm init`.
- This file will define project metadata, dependencies, and scripts.

### Step 2: TypeScript Configuration
- Install TypeScript as a development dependency.
- Create a `tsconfig.json` file to configure the TypeScript compiler. Key settings will include:
    - `target`: `ESNext` (to support modern JavaScript features).
    - `module`: `ESNext` (for modern module support).
    - `declaration`: `true` (to generate `.d.ts` files for library consumers).
    - `outDir`: `dist` (to specify the output directory for compiled files).
    - `strict`: `true` (to enforce strong type-checking).

### Step 3: Vitest and Test Coverage Setup
- Install Vitest, c8 (for coverage), and related dependencies.
- Create a `vitest.config.ts` file.
- Configure the test script in `package.json` to run Vitest.
- Configure Vitest to enforce a 90% test coverage requirement.

### Step 4: Directory and Code Structure
- Create the `src/` directory for the library's source code.
- Create the `test/` directory for the unit tests.
- Add a placeholder `src/index.ts` file with a simple function.
- Add a corresponding `test/index.test.ts` file to test the placeholder function.

### Step 5: NPM Script Configuration
- In `package.json`, add the following scripts:
    - `test`: Runs the tests using Vitest.
    - `coverage`: Runs the tests and generates a coverage report.
    - `build`: Compiles the TypeScript code into JavaScript in the `dist/` directory.
    - `prepublishOnly`: A script that runs the build before the package is published.

### Step 6: GitHub Actions CI
- Create the `.github/workflows/` directory.
- Add a `ci.yml` file.
- The CI workflow will:
    - Check out the code.
    - Set up Node.js version 20.
    - Install dependencies using `npm ci`.
    - Run the tests with coverage checks.

### Step 7: Documentation
- After completing the setup and coding, create the following documentation files:
    - `jules/plan001-report.md`: A report detailing the execution of this plan, including any challenges and solutions.
    - `jules.md`: A comprehensive developer guide for the project.
    - `AGENTS.md`: Instructions for AI agents working on this repository in the future.

This structured approach ensures all requirements are met systematically, resulting in a well-configured, maintainable, and robust project foundation.

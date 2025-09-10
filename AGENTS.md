# Instructions for AI Agents

This document provides guidelines for AI agents working on the `slotcraft-client-logic` repository.

## Project Overview

This is a TypeScript library that provides the core logic for the Slotcraft game client. It is designed to be lightweight and easily integrated into modern web frameworks.

## Development Environment

- **Node.js**: The project requires Node.js version 20 or higher.
- **Package Manager**: Use `npm` for dependency management.
- **Testing**: The project uses [Vitest](https://vitest.dev/) for unit testing.

## Key Commands

- **Install dependencies**: `npm install`
- **Build the project**: `npm run build`
- **Run tests**: `npm test`
- **Run tests with coverage**: `npm run coverage`

## Testing Requirements

- All new features must be accompanied by unit tests.
- The test coverage must be maintained at 90% or higher. The CI pipeline will enforce this.

## Code Style

- Follow standard TypeScript best practices.
- Ensure all types are clearly defined.
- Add comments to complex logic to improve readability.

## Continuous Integration (CI)

The CI pipeline is defined in `.github/workflows/ci.yml`. It runs on every push and pull request to the `main` branch. Ensure that all tests pass before submitting your changes.

## Submitting Changes

1.  Create a new branch for your changes.
2.  Make your changes and commit them with a clear and concise commit message.
3.  Ensure all tests pass, including the coverage check.
4.  Push your changes and create a pull request.
5.  Address any feedback from the code review.

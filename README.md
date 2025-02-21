# Scaffold

Last edited: 2025-02-21T17:41:42Z

- [Scaffold](#scaffold)
  - [Prerequisites](#prerequisites)
    - [Node and npm management](#node-and-npm-management)
  - [Setup](#setup)
  - [Development](#development)
  - [Testing](#testing)
    - [Unit/Integration testing](#unitintegration-testing)
    - [End-to-End testing](#end-to-end-testing)
  - [Building](#building)

## Prerequisites

### Node and npm management

[Volta](https://volta.sh/) is used as the node version management tool during local development.

[Node.js](https://nodejs.org/) runtime and [npm](https://www.npmjs.com/) package manager requirements can be found in `package.json`.

```json
{
  "volta": {
    "node": "22.14.0",
    "npm": "11.1.0"
  }
}
```

## Setup

Install dependency packages. All public packages within this environment originate from the [npm](https://www.npmjs.com/) public package registry, and uses the `npm-cli` command line tool.

```sh
npm install
```

> [!NOTE]
> Using the command above, will additionally install browser binaries required for running of [Playwright](https://playwright.dev)

## Development

First, run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

### Unit/Integration testing

[Vitest](https://vitest.dev) and [RTL (React Testing Library)](https://testing-library.com/docs/react-testing-library), to test both React UI component and TypeScript functions.

Run tests with command below.

```sh
npm test
```

### End-to-End testing

[Playwright](https://playwright.dev) is used to emulate user interactions with a webpage.

Run tests with command below.

```sh
npm run test:e2e
```

To visualise the tests within the Playwright GUI, use the command below.

```sh
npm run test:e2e -- --ui
```

## Building

This repo uses the [Next.js](https://nextjs.org) project bootstrap.

Build project with command below.

```sh
npm run build
```

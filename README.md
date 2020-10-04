<div align="center">
  <a href="https://github.com/bconnorwhite/dir-exists-safe">
    <img alt="dir-exists-safe" src="assets/header.svg" />
  </a>
  <a href="https://npmjs.com/package/dir-exists-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/dir-exists-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/dir-exists-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/dir-exists-safe.svg">
  </a>
  <a href='https://coveralls.io/github/bconnorwhite/dir-exists-safe?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/dir-exists-safe.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/dir-exists-safe">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/dir-exists-safe?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Check if a directory exists without try catch.

- Returns `true` if the path exists and is a directory.
- Returns `false` if the path is not a directory, or does not exist.
- Returns `undefined` on other errors (for example, permission denied) rather than throwing.

## Installation

```sh
yarn add dir-exists-safe
```

```sh
npm install dir-exists-safe
```

## API

```ts
import { dirExists, dirExistsSync } from "dir-exists-safe";

function dirExists(path: string): Promise<boolean | undefined>;

function dirExistsSync(path: string): boolean | undefined;
```

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/dir-exists-safe.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for typescript projects
- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/dir-exists-safe.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)

<br />

## Related Packages

- [fs-safe](https://www.npmjs.com/package/fs-safe): A simple fs wrapper that doesn't throw
- [file-exists-safe](https://www.npmjs.com/package/file-exists-safe): Check if a file exists without a try catch

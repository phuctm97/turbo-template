# turbo-template

Create a [Turbo] monorepo

## Requirements

- [Node.js] `>=20`

- [pnpm] `>=8`

- [Turbo](https://turbo.build/repo/docs/installing#install-globally)

- [Visual Studio Code]

## Features

- First-class TypeScript, JavaScript ESM, and CJS support

- Lint code with [ESLint], automatically detect TypeScript, JavaScript ESM, and CJS modules

- Format code with [Prettier]

- Generate code with [Turbo] code generators (in TypeScript)

- Build, lint, and typecheck code with [Turbo] pipeline

- Publish npm packages with [pnpm]

- Best-in-class [Visual Studio Code] integration

  - UI to run build, lint, typecheck, generate, and publish tasks

  - Debug code with breakpoints

  - Auto fix/format code on save

  - Use workspace TypeScript version

  - Recommend extensions

## Usage

1. [Create a repository from this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

2. Remove irrelevant files

   ```sh
   rm -rf .git README.md
   ```

3. Install dependencies

   ```sh
   pnpm i
   ```

4. Open in [Visual Studio Code]

   ```sh
   code .
   ```

<!-- Links -->

[visual studio code]: https://code.visualstudio.com/
[node.js]: https://nodejs.org/
[turbo]: https://turbo.build
[pnpm]: https://pnpm.io
[prettier]: https://prettier.io
[eslint]: https://eslint.org

# turbo-template

Create a [Turbo] monorepo

## Requirements

- [Node.js] `>=20`

- [pnpm] `>=8`

- [Turborepo] ([installed globally](https://turbo.build/repo/docs/installing#install-globally))

- [Visual Studio Code]

## Features

- First-class TypeScript, JavaScript ESM, and CJS support

- Format code with [Prettier] (and [Prettier plugins])

  ```sh
  turbo format
  ```

- Typecheck code in TypeScript

  ```sh
  turbo typecheck
  ```

- Lint code with [ESLint], automatically detect TypeScript, JavaScript ESM, and CJS modules

  ```sh
  turbo lint
  ```

- Build code with any tools ([Next.js], [Vite], [Rollup], [tsup], [esbuild], etc.)

  ```sh
  turbo build
  ```

- Format, typecheck, lint, and build code with [Turborepo] pipeline

  ```sh
  turbo format typecheck lint build
  ```

- Publish npm packages with [pnpm]

  ```sh
  pnpm -r publish
  ```

- Generate code with [Turborepo] generators (in TypeScript)

  ```sh
  turbo gen
  ```

- Best-in-class [Visual Studio Code] integration

  - UI to run format, typecheck, lint, build, publish, and generate tasks

  - Work flawlessly with TypeScript, ESLint, and Prettier

  - Debug code with breakpoints

  - Fix and format code automatically

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
[turborepo]: https://turbo.build/repo
[pnpm]: https://pnpm.io
[eslint]: https://eslint.org
[prettier]: https://prettier.io
[prettier plugins]: https://prettier.io/docs/en/plugins.html
[next.js]: https://nextjs.org
[vite]: https://vitejs.dev
[rollup]: https://rollupjs.org
[tsup]: https://tsup.egoist.dev
[esbuild]: https://esbuild.github.io

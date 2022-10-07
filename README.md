 
 
 <p align="center" >
<img src="https://i2.wp.com/www.ishanka.me/wp-content/uploads/2019/12/nodetsejs.jpg?w=2000&ssl=1" />
<P/>
 <p align="center">
  <img src="https://img.shields.io/static/v1?label=Clean-Arch TDD api&message=Welcome&color=FFFFFF&labelColor=110C2F" alt="Unsplash welcome!" />
  <img alt="License" src="https://img.shields.io/static/v1?label=version&message=1.0&color=FFFFFF&labelColor=110C2F">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=FFFFFF&labelColor=110C2F">
  <img alt="Stars" src="https://img.shields.io/github/stars/yazaldefilimonepinto/clean-arch-api-starter?color=FFFFFF&labelColor=110C2F">
  <img alt="Languages" src="https://img.shields.io/github/languages/count/yazaldefilimonepinto/clean-arch-api-starter?color=FFFFFF&labelColor=110C2F">
</p>
<p align="center" >
Clean architecture starter for Nodejs(Express.js) with TypeScript. <br>
All the tools you need to build your API Rest.
<P/>

## Features

- ⚡️ Express.js 4
- ⛑ TypeScript
- 📍 DotEnv - is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🚓 Commitlint — To make sure your commit messages follow the convention
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `~/` prefix
- ‽ Either Error Handler - For error handling. (Either is designed to hold either a left or a right value but never both).

## Quick Start

The best way to start with this template is using [ExpressJs Docs](https://expressjs.com/en/starter/hello-world.html).

```
# yarn
yarn create next-app -e https://github.com/yazaldefilimonepinto/clean-arch-api-starter
# npm
npx create-next-app -e https://github.com/yazaldefilimonepinto/clean-arch-api-starter
```

### Development

To start the project locally, run:

```bash
  npm dev
  our
  yarn dev
```

Open `http://localhost:3003` with your api-client to tests api(exemple: `postman` or `insomnia`).

### Requirements

- Node.js >= 12.22.0
- npm our yarn

### Directory Structure

- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`tests`](./tests) — Tests source code,including domain, application, infrastructure, main and shared.<br>
- [`src`](./src) — Application source code, including domain, application, infrastructure, main and shared.<br>

### Scripts

- `yarn/npm dev` — Starts the application in development mode at `http://localhost:3003`.
- `yarn/npm build` — Creates an optimized production build of your application.
- `yarn/npm start` — Starts the application in production mode.
- `yarn/npm lint` — Runs ESLint for all files in the `src` directory.

### Path Mapping

TypeScript/Node are pre-configured with custom path mappings. To import components or files, use the `~/` prefix.

```ts
import { createUserFactory } from '~/application/factories/create-user-factory';
```

<a id="license"></a>

## License

[MIT](https://github.com/yazaldefilimonepinto/clean-arch-api-starter/blob/main/LICENSE) © [Yazalde Filimone](https://www.linkedin.com/in/yazalde-filimone/)

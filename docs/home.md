<div style="text-align: center">
  <img style="height: 300px" src="_media/logo-text.svg">

  <div>The coolest opinionated ready-to-go node framework</div>
</div>

[![NPM version][npm-image]][npm-url]

@node-cool is an opinionated node server framework with the goal to give all the tools out-of-the-box needed for building a modern web server application.

## Main features

- CLI
- TypeScript
- IoC Container
- MVC controllers
- Database ORM
- Code Linting
- Code formatting
- Authentication & Session management
- Google, Facebook authentication
- XSRF Token validation

### Coming soon

- Email based authentication
- Password based authentication
- Authorization framework

## Technologies

| Feature         | Package                   | Technology                                                               |
| --------------- | ------------------------- | ------------------------------------------------------------------------ |
| Type Safety     | @node-cool/core           | [TypeScript](https://www.npmjs.com/package/typescript)                   |
| IoC Container   | @node-cool/core           | [injection-js](https://www.npmjs.com/package/injection-js)               |
| node framework  | @node-cool/core           | [Koa.js](https://www.npmjs.com/package/koa)                              |
| MVC controllers | @node-cool/core           | [routing-controllers](https://www.npmjs.com/package/routing-controllers) |
| Testing         | @node-cool/core           | [Jasmine](https://www.npmjs.com/package/jasmine)                         |
| Database ORM    | @node-cool/database       | [TypeORM](https://www.npmjs.com/package/typeorm)                         |
| Authentication  | @node-cool/authentication | [Passport](https://www.npmjs.com/package/passport)                       |
| Code Linting    | @node-cool/cli            | [ESLint](https://www.npmjs.com/package/eslint)                           |
| Code Formatting | @node-cool/cli            | [Prettier](https://www.npmjs.com/package/prettier)                       |

## [Get started](/getting-started/install.md)

[npm-url]: https://www.npmjs.com/package/@node-cool/core
[npm-image]: http://img.shields.io/npm/v/@node-cool/core.svg

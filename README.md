# @equal/eslint-config

An eslint config base on [standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript).

## Installation

```
npm i -D @equal/eslint-config
```

## Typescript

```yml
# .estlintrc.yml
root: true

env:
  es6: true
  jest: true
  node: true

extends:
  - "@equal/eslint-config/typescript"
```

## Typescript + ReactJS

```yml
# .estlintrc.yml
env:
  es6: true
  jest: true
  browser: true

extends:
  - "@equal/eslint-config/typescript-react"
```

## Typescript + Prettier

```bash
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

```yml
# .estlintrc.yml
env:
  es6: true
  jest: true
  node: true

extends:
  - "@equal/eslint-config/typescript"
  - prettier
  - prettier/@typescript-eslint
  - prettier/standard

rules:
  prettier/prettier: error

plugins:
  - "@typescript-eslint"
  - prettier
```

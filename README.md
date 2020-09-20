# @equal/eslint-config

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
  - react-app
  - "@equal/eslint-config/typescript"
```

## Typescript + ReactJS + Prettier

```yml
# .estlintrc.yml
env:
  es6: true
  jest: true
  browser: true
extends:
  - react-app
  - "@equal/eslint-config/typescript"
  - prettier
  - prettier/@typescript-eslint
  - prettier/standard
plugins:
  - "@typescript-eslint"
  - prettier
```

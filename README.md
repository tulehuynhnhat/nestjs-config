# NestJS - Configuration

## Introduction

Why create this project?

- Know how to load and parse a `.env` file from the project root directory and merge key/value pairs from the `.env` file with environment variables assigned to `process.env`
- Know how to use configuration (built-in Nest) to solve some problem

## Project overview

Github: https://github.com/tulehuynhnhat/Nestjs-config  
Node: 18.17.1  
@nestjs/config: 3.0.0

### Setup after init project

Create `.env` file

```env
ENV1=value_env1
ENV2=value_env2
```

Install package

```bash
npm i --save @nestjs/config
```

### Module & API

- App
- Something
  - GET: http://localhost:3000/something/
- Dependency: App -> Something

## Situation

[Situation 1: Import ConfigModule in App and get env from Something service](https://github.com/tulehuynhnhat/Nestjs-config/tree/situation-1)

[Situation 2: Import ConfigModule in App module set Global and get env from Something service](https://github.com/tulehuynhnhat/Nestjs-config/tree/situation-2)

[Situation 3: Get env from main](https://github.com/tulehuynhnhat/Nestjs-config/tree/situation-3)

[Situation 4: Custom configuration files](https://github.com/tulehuynhnhat/Nestjs-config/tree/situation-4)

[Situation 5: Use Config Service with interface as the type hint](https://github.com/tulehuynhnhat/Nestjs-config/tree/situation-5)

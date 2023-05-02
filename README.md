<img src="prisma/prisma-erd.svg" alt="descrição da imagem">

## Description

The ERM is not complete yet. The API is not finished.

## Installation

```bash
$ npm install
```

## Database configuration

<div>
    JWT_SECRET="JWT PASSWORD"

    <!-- DATABASE_URL="file:./dev.db"  -->

    DATABASE_URL = "postgresql://postgres:password@localhost:port/database-name"
</div>


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## License

Nest is [MIT licensed](LICENSE).

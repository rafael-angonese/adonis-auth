# Adonis API application


This project was developed with the objective of creating an authentication API

You can view the project that integrates the API at:
[Auth-React-Native](https://github.com/rafael-angonese/authrn)

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Clone the repo and then run `npm install`. 

```js
npm install
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Run

```js
adonis serve --dev
```
and acess `http://localhost:3333`

### Docs

You can see the documentation with Postman importing docs/`adonis-auth.postman_collection.json`
# Web Store

A web application where you can view products and add new ones. It has a React + TypeScript frontend (Vite), a Spring Boot backend, and a Postgres database.

## Prerequisites

- Java 26
- Node 22+
- PostgreSQL

## Setup

Create the database:

```bash
createdb webstore
```

The backend connects to `localhost/webstore` as user `jhust`. To use a different Postgres user, change `spring.datasource.username` in `src/main/resources/application.yaml`. Hibernate creates the `products` table on startup.

## Running

Start the backend on http://localhost:8080:

```bash
DB_PASSWORD=<your-password> ./gradlew bootRun
```

Start the frontend on http://localhost:5173. It forwards `/api` requests to the backend.

```bash
cd webstore
npm install
npm run dev
```

## Tests

```bash
./gradlew test
cd webstore && npm test
```
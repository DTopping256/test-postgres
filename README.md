# Postgres database + Drizzle

> **Disclaimer: This is not intended as a guide for a production setup, this was an experiment for local development only.**

Made a simple relational database for modelling games of Snooker as the domain.

## Usage

**Prerequisites:**

- You should have [Docker Desktop](https://docs.docker.com/desktop/) installed and running on your system in order to run the Postgres database locally using Docker,
- You will need a database management tool of your choice installed (i.e. SQLectron, psql).

### Running locally and connecting

- Create a file `.env` and set a password for Postgres to use:

  ```env
  POSTGRES_HOST=127.0.0.1
  POSTGRES_DATABASE_NAME=postgres
  POSTGRES_USER=postgres
  POSTGRES_PASSWORD=<password>
  ```

- Start the database locally

  ```sh
  docker compose up
  ```

- Connect to the database using the tool of your choice
  > Username is `postgres`, the password will be what was set up in the `.env` file (note, once the DB is started the password used for setup is stored in Postgres, updating the `.env` file will not propagate the update to the DB).

### Stopping the database

The database will save to a Docker volume, so will persist changes to the database instance on your machine when Docker is stopped.

### Configuring the database

#### Option 1. Manually running SQL scripts

In the `database/manual/` directory, are SQL scripts which setup the database and seed it.

- Tables can be added by executing each table sql script in this order: `player.sql`, `game.sql`, `game_player_break.sql`.
- Data can be seeded into these tables using the `seed_data.sql` script.

#### Option 2. Using Drizzle

- Applying drizzle migrations: `pnpm db:generate` followed by `pnpm db:migrate`
- Seeding the database: `pnpm db:seed`

### Example queries

Example queries for the seed data on the table structures are here:
[/database/manual/example_queries.sql](./database/manual/example_queries.sql)

Or can be ran in CLI using Drizzle with `pnpm db:query-highest-break` or `pnpm db:query-game-score` CLI commands.

## References

- https://docs.docker.com/desktop/
- https://hub.docker.com/_/postgres
- https://www.postgresql.org/docs/current/
- https://orm.drizzle.team/docs/get-started/postgresql-new
- https://orm.drizzle.team/docs/kit-overview

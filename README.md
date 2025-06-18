# Development environment Postgres database + Drizzle

> **Disclaimer: This is not intended as a guide for a production setup, this was an experiment for local development only.**

Made a simple relational database for modelling games of Snooker as the domain.

## Usage

**Prerequisites:**

- You should have [Docker Desktop](https://docs.docker.com/desktop/) installed and running on your system in order to run the Postgres database locally using Docker,
- You will need a database management tool of your choice installed (i.e. SQLectron, psql).

### Running locally and connecting

- Create a file `.env` and set a password for Postgres to use:

  ```env
  POSTGRES_PASSWORD=<PASSWORD>
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

- Tables can be added by executing each table sql script in this order: `player.sql`, `game.sql`, `game_player_break.sql`.
- Data can be seeded into these tables using the `seed_data.sql` script.

### Example queries

Example queries for the seed data on the table structures are here:
[/database/example_queries.sql](./database/example_queries.sql)

## References

- https://docs.docker.com/desktop/
- https://hub.docker.com/_/postgres
- https://www.postgresql.org/docs/current/

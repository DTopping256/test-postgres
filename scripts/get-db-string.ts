import { config } from "@dotenvx/dotenvx";

config();

console.log(
  `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/${process.env.POSTGRES_DATABASE_NAME}`
);

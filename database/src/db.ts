import { drizzle } from "drizzle-orm/node-postgres";

const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}/${process.env.POSTGRES_DATABASE_NAME}`;

export const db = drizzle(connectionString);

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./database/src/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.POSTGRES_HOST!,
    port: 5432,
    database: process.env.POSTGRES_DATABASE_NAME!,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD!,
    ssl: false,
  },
});

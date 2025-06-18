import { uuid, varchar, timestamp, pgTable } from "drizzle-orm/pg-core";

export const gameTable = pgTable("game", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 24 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Game = typeof gameTable.$inferSelect;
export type InsertGame = typeof gameTable.$inferInsert;

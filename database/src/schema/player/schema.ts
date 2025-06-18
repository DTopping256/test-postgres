import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

export const playerTable = pgTable("player", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 24 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Player = typeof playerTable.$inferSelect;
export type InsertPlayer = typeof playerTable.$inferInsert;

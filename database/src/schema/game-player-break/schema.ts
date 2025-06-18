import { pgTable, uuid, smallint, timestamp } from "drizzle-orm/pg-core";
import { gameTable } from "../game/schema";
import { playerTable } from "../player/schema";

export const gamePlayerBreakTable = pgTable("game_player_break", {
  id: uuid("id").primaryKey().defaultRandom(),
  game: uuid("game")
    .references(() => gameTable.id)
    .notNull(),
  player: uuid("player")
    .references(() => playerTable.id)
    .notNull(),
  score: smallint("score").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type GamePlayerBreak = typeof gamePlayerBreakTable.$inferSelect;
export type InsertGamePlayerBreak = typeof gamePlayerBreakTable.$inferInsert;

import { db } from "./db";
import { sum, eq, and } from "drizzle-orm";
import { gamePlayerBreakTable, gameTable, playerTable } from "./schema";
import { parseArgs } from "node:util";

const args = parseArgs({
  options: {
    playerName: {
      type: "string",
      short: "p",
    },
    gameName: {
      type: "string",
      short: "g",
    },
  },
});

async function main({
  playerName,
  gameName,
}: {
  playerName?: string;
  gameName?: string;
}) {
  if (playerName == null) {
    throw "Player name is required";
  }
  if (gameName == null) {
    throw "Game name is required";
  }

  const score = await db.transaction(async (tx) => {
    const selectResult = await tx
      .select({
        value: sum(gamePlayerBreakTable.score),
      })
      .from(gamePlayerBreakTable)
      .innerJoin(playerTable, eq(gamePlayerBreakTable.player, playerTable.id))
      .innerJoin(gameTable, eq(gamePlayerBreakTable.game, gameTable.id))
      .where(
        and(eq(playerTable.name, playerName), eq(gameTable.name, gameName))
      );
    return selectResult[0].value;
  });

  console.log("Game score:", score);
  process.exit(0);
}

main({ ...args.values }).catch((error) => {
  console.error(error);
  process.exit(1);
});

import { db } from "./db";
import { max, eq } from "drizzle-orm";
import { gamePlayerBreakTable, playerTable } from "./schema";
import { parseArgs } from "node:util";

const args = parseArgs({
  options: {
    playerName: {
      type: "string",
      short: "p",
    },
  },
});

async function main({ playerName }: { playerName?: string }) {
  if (playerName == null) {
    throw "Player name is required";
  }

  const highestBreak = await db.transaction(async (tx) => {
    const selectResult = await tx
      .select({
        value: max(gamePlayerBreakTable.score),
      })
      .from(gamePlayerBreakTable)
      .innerJoin(playerTable, eq(gamePlayerBreakTable.player, playerTable.id))
      .where(eq(playerTable.name, playerName));

    return selectResult[0].value;
  });

  console.log("Highest break:", highestBreak);
  process.exit(0);
}

main({ ...args.values }).catch((error) => {
  console.error(error);
  process.exit(1);
});

import { db } from "./db";
import { gameTable, gamePlayerBreakTable, playerTable } from "./schema";

async function main() {
  await db.transaction(async (tx) => {
    console.log("Clearing previous data...");
    await tx.delete(gamePlayerBreakTable);
    await tx.delete(gameTable);
    await tx.delete(playerTable);

    console.log("Seeding data...");
    const [game1, game2] = await tx
      .insert(gameTable)
      .values([
        { name: "Friendly match no.103" },
        { name: "Tournement match no.1" },
      ])
      .returning();
    console.log("Games inserted", [game1, game2]);

    const [johnDoe, janeSmith] = await tx
      .insert(playerTable)
      .values([{ name: "John Doe" }, { name: "Jane Smith" }])
      .returning();
    console.log("Players inserted", [johnDoe, janeSmith]);

    const playerBreaks = await tx
      .insert(gamePlayerBreakTable)
      .values([
        {
          game: game1.id,
          player: johnDoe.id,
          score: 100,
        },
        {
          game: game1.id,
          player: janeSmith.id,
          score: 90,
        },
        {
          game: game1.id,
          player: johnDoe.id,
          score: 30,
        },
        {
          game: game2.id,
          player: johnDoe.id,
          score: 0,
        },
        {
          game: game2.id,
          player: janeSmith.id,
          score: 147,
        },
      ])
      .returning();
    console.log("Player breaks inserted", playerBreaks);
  });
  console.log("Done!");
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

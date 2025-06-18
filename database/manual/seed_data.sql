INSERT INTO game (name) VALUES ('Friendly match no.103'), ('Tournement match no.1');

INSERT INTO player (name) VALUES ('John Doe'), ('Jane Smith');

INSERT INTO game_player_break (game, player, score)
VALUES 
((SELECT id FROM game WHERE name = 'Friendly match no.103'), (SELECT id FROM player WHERE name = 'John Doe'), 100),
((SELECT id FROM game WHERE name = 'Friendly match no.103'), (SELECT id FROM player WHERE name = 'Jane Smith'), 90),
((SELECT id FROM game WHERE name = 'Friendly match no.103'), (SELECT id FROM player WHERE name = 'John Doe'), 30),
((SELECT id FROM game WHERE name = 'Tournement match no.1'), (SELECT id FROM player WHERE name = 'John Doe'), 0),
((SELECT id FROM game WHERE name = 'Tournement match no.1'), (SELECT id FROM player WHERE name = 'Jane Smith'), 147);
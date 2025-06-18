-- Get the total score in a game for a player

SELECT sum(score) AS total 
FROM game_player_break
JOIN player ON game_player_break.player = player.id
JOIN game ON game_player_break.game = game.id
WHERE player.name = 'John Doe' AND game.name = 'Tournement match no.1';

SELECT sum(score) AS total 
FROM game_player_break
JOIN player ON game_player_break.player = player.id
JOIN game ON game_player_break.game = game.id
WHERE player.name = 'Jane Smith' AND game.name = 'Tournement match no.1';

-- Get the highest break for a player in all games

SELECT max(score) AS highest_break 
FROM game_player_break
JOIN player ON game_player_break.player = player.id
WHERE player.name = 'John Doe';

SELECT max(score) AS highest_break 
FROM game_player_break
JOIN player ON game_player_break.player = player.id
WHERE player.name = 'Jane Smith';
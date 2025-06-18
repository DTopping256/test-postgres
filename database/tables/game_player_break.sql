CREATE TABLE IF NOT EXISTS game_player_break (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    game uuid REFERENCES game(id) NOT NULL,
    player uuid REFERENCES player(id) NOT NULL,
    score SMALLINT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE game_player_break ADD COLUMN IF NOT EXISTS id uuid PRIMARY KEY DEFAULT gen_random_uuid();
ALTER TABLE game_player_break ADD COLUMN IF NOT EXISTS game uuid REFERENCES game(id) NOT NULL;
ALTER TABLE game_player_break ADD COLUMN IF NOT EXISTS player uuid REFERENCES player(id) NOT NULL;
ALTER TABLE game_player_break ADD COLUMN IF NOT EXISTS score smallint NOT NULL;
ALTER TABLE game_player_break ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
ALTER TABLE game_player_break ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
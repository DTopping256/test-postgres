CREATE TABLE IF NOT EXISTS player (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name varchar(24) NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

ALTER TABLE player ADD COLUMN IF NOT EXISTS id uuid PRIMARY KEY DEFAULT gen_random_uuid();
ALTER TABLE player ADD COLUMN IF NOT EXISTS name varchar(24) NOT NULL;
ALTER TABLE player ADD COLUMN IF NOT EXISTS created_at timestamp with time zone DEFAULT now();
ALTER TABLE player ADD COLUMN IF NOT EXISTS updated_at timestamp with time zone DEFAULT now();
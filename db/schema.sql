DROP DATABASE IF EXISTS mixer_dev;
CREATE DATABASE mixer_dev;

\c mixer_dev;

CREATE TABLE mixer (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist VARCHAR(50) NOT NULL,
    album VARCHAR(50) NOT NULL,
    genre TEXT NOT NULL,
    time_in_seconds INT CHECK (time_in_seconds > 0),
    is_favorite BOOLEAN,
    image TEXT,
    audio_url TEXT
);

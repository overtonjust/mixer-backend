// Dependencies
const db = require('../db/dbConfig');

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM mixer")
        return allSongs;
    } catch (error) {
        return error;
    }
};

const getOneSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM mixer WHERE id=$1", id)
        return oneSong;
    } catch (error) {
        return error;
    }
};

const createSong = async (song) => {
    try {
        const newSong = await db.one("INSERT INTO mixer (name, artist, album, genre, time_in_seconds, is_favorite, image, audio_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [song.name, song.artist, song.album, song.genre, song.time_in_seconds, song.is_favorite, song.image, song.audio_url]
        );
        return newSong;
    } catch (error) {
        return error;
    }
};

const updateSong = async (id, song) => {
    try {
        const updatedSong = await db.one("UPDATE mixer SET name=$1, artist=$2, album=$3, genre=$4, time_in_seconds=$5, is_favorite=$6, image=$7, audio_url=$8 WHERE id=$9 RETURNING *",
            [song.name, song.artist, song.album, song.genre, song.time_in_seconds, song.is_favorite, song.image, song.audio_url, id]
        );
        return updatedSong;
    } catch (error) {
        return error;
    }
};

const deleteSong = async (id) => {
    try {
        const deletedSong = await db.one("DELETE FROM mixer WHERE id=$1 RETURNING *",id)
        return deletedSong;
    } catch (error) {
        return error;
    }
};

module.exports = {getAllSongs, getOneSong , createSong, updateSong, deleteSong}
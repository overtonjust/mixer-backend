// Dependencies
const express = require('express');
const songs = express.Router();
const { getAllSongs, createSong, updateSong, getOneSong, deleteSong } = require('../queries/songs');
const { checkName, checkArtist, checkAlbum, checkFavorite } = require('../validations/songValidations')

// READ

songs.get('/', async (req,res) => {
    const allSongs = await getAllSongs();
    if(allSongs[0]) {
        res.status(200).json(allSongs)
    } else {
        res.status(500).json({error: 'Server error'})
    }
});

songs.get('/:id', async (req, res) => {
    const { id } = req.params;
    const oneSong = await getOneSong(id);

    if(oneSong.id) {
        res.status(200).json(oneSong)
    } else {
        res.status(404).json({error: 'Song not found'})
    }
});

// CREATE

songs.post('/', checkName, checkArtist, checkAlbum, checkFavorite, async (req, res) => {
    const newSong = await createSong(req.body);

    if(newSong.id) {
        res.status(200).json(newSong)
    } else {
        res.status(400).json({error: "Something went wrong"})
    }
});

// UPDATE 
songs.put('/:id', checkName, checkArtist, checkAlbum, checkFavorite, async (req,res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);

    if(updatedSong.id) {
        res.status(200).json(updatedSong)
    } else {
        res.status(404).json({error: "Song not found"})
    }
});


// DELETE
songs.delete('/:id', async (req,res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);

    if(deletedSong.id) {
        res.status(200).json({message: "Successfully Deleted"})
    } else {
        res.status(404).json({error: "Song not found"})
    }
});

module.exports = songs;
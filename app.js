// Dependencies
const express = require('express');
const cors = require('cors');
const songsController = require('./controllers/songController');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/songs', songsController);

app.get('/', (req, res) => {
    res.json({message: 'Welcome to mixer'})
})


app.get('*', (req,res) => {
    res.status(404).json({error: 'Path not found'})
})

module.exports = app;
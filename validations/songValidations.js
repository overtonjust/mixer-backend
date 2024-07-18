const checkName = (req, res, next) => {
    if(typeof req.body.name === 'string') {
        next()
    } else {
        res.status(400).json({error: 'Song must have a name'})
    }
};

const checkArtist = (req, res, next) => {
    if(typeof req.body.artist === 'string') {
        if(req.body.artist.length <= 50) {
            next();
        } else {
            res.status(400).json({error: 'Song artist cannot be longer than 50 characters'})
        }
    } else {
        res.status(400).json({error: 'Song must have an artist'})
    }
};

const checkAlbum = (req, res, next) => {
    if(typeof req.body.album === 'string') {
        if(req.body.album.length <= 50) {
            next();
        } else {
            res.status(400).json({error: 'Song album cannot be longer than 50 characters'})
        }
    } else {
        res.status(400).json({error: 'Song must have an album'})
    }
};

const checkFavorite = (req, res, next) => {
    if(typeof req.body.is_favorite === 'boolean') {
        next()
    } else {
        res.status(400).json({error: 'Favorite must be a boolean'})
    }
}



module.exports = { checkName, checkArtist, checkAlbum, checkFavorite }
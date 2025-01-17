# Mixer - Backend

This app is designed to allow users to easily add, remove, and update songs from a collaborative Library. Fundamentally, it stores a diverse collection of songs, including details such as title, artist, album, and genre.

Noteworthy features:

- Adding and removing songs from a Library
- Editing songs in a Library
- Viewing the Library

## REST
**Base URL:** https://mixer-backend.onrender.com

Available endpoints:
```
{
    addNewSong: `https://mixer-backend.onrender.com/songs`,
    getAllSongs: `https://mixer-backend.onrender.com/songs`,
    getOneSong: `https://mixer-backend.onrender.com/songs/:id`,
    editOneSong: `https://mixer-backend.onrender.com/songs/:id`,
    deleteOneSong: `https://mixer-backend.onrender.com/songs/:id`
}
```

### Adding a new song
To add a new song to the Library, send a POST request to the /songs endpoint.
```
https://mixer-backend.onrender.com/songs
```
```
Request Body:

{
      name: 'Never Gonna Give You Up',
      artist: 'Rick Astley',
      album: 'Whenever You Need Somebody',
      genre: 'Pop/K-Pop',
      time_in_seconds: 212,
      is_favorite: true,
      img: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/de/eb/63/deeb63c1-7bc0-9153-cfa3-fd9e4929aacf/4050538826562.jpg/1200x1200bb.jpg',
      audio_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}
```

*Song objects must follow the format shown in the above example (e.g., audio_url must link to a YoutTube video)*

### Viewing the Library
To view the Library, send a GET request to the /songs endpoint.
```
https://mixer-backend.onrender.com/songs
```
```
Response:

[
    {
        id: 1,
        name: 'Never Gonna Give You Up',
        artist: 'Rick Astley',
        album: 'Whenever You Need Somebody',
        genre: 'Pop',
        time_in_seconds: 212,
        is_favorite: true,
        img: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/de/eb/63/deeb63c1-7bc0-9153-cfa3-fd9e4929aacf/4050538826562.jpg/1200x1200bb.jpg',
        audio_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    ...
]
```

### Viewing a single song
To view any particular song, send a GET request to the /songs/:id endpoint.
```
https://mixer-backend.onrender.com/songs/:id
```
```
Response: 

{
    id: 1,
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley',
    album: 'Whenever You Need Somebody',
    genre: 'Pop','
    time_in_seconds: 212,
    is_favorite: true,
    img: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/de/eb/63/deeb63c1-7bc0-9153-cfa3-fd9e4929aacf/4050538826562.jpg/1200x1200bb.jpg',
    audio_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}
```

### Editing a single song
To edit the details of any particular song, send a PUT request to the /songs/:id endpoint.
```
https://mixer-backend.onrender.com/songs/:id
```
```
Request Body:

{
    name: 'Rick Roll',
    artist: 'Rick Astley',
    album: 'Whenever You Need Somebody',
    genre: 'Pop','
    time_in_seconds: 212,
    is_favorite: false,
    img: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/de/eb/63/deeb63c1-7bc0-9153-cfa3-fd9e4929aacf/4050538826562.jpg/1200x1200bb.jpg',
    audio_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}
```

*Song objects must follow the format shown in the above example (e.g., audio_url must link to a YoutTube video)*

### Removing a single song
To remove any particular song from the Library, send a DELETE request to the /songs/:id endpoint.
```
https://mixer-backend.onrender.com/songs/:id
```
```
Response:

{
    message: "Successfully Deleted"
}
```

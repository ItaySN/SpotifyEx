const express = require('express');
const cors = require('cors')

const mysql = require('mysql');
require('dotenv').config();

const app = express();

app.use(express.json()); 
app.use(cors());




const db = mysql.createConnection({
    host : 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: 'spotify'
});

db.connect((err) => {
    if(err){
        if(err) return res.status(400).send(err.message);
    }
    console.log('Connected to DB');
})

app.get("/songs",(req,res)=>{
    let sql = `SELECT songs.*,albums.name As album, artists.name As artist FROM songs Join artists ON artists.id = songs.artist_id JOIN albums ON albums.id = songs.album_id ORDER BY songs.id;`;
    let query = db.query(sql,(err,result) => {
        if(err) return result.status(400).send(err.message);
        console.log(result);
        res.send(result);
    })
})

app.get('/songs/:id', (req,res) => {
    let sql = `SELECT * FROM songs WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err,result) => {
        if(err) return res.status(400).send(err.message);
        res.send(result);
    }); 
});

app.get('/artists/:id', (req,res) => {
    let sql = `SELECT * FROM artists WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err,result) => {
       if(err) return res.status(400).send(err.message);
        res.send(result);
    }); 
});

app.get('/albums/:id', (req,res) => {
    let sql = `SELECT * FROM albums WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err,result) => {
       if(err) return res.status(400).send(err.message);
        res.send(result);
    }); 
});

app.get('/playlists/:id', (req,res) => {
    let sql = `SELECT * FROM playlists WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err,result) => {
       if(err) return res.status(400).send(err.message);
        res.send(result);
    }); 
});

app.post('/playlist' , (req,res) => {
    let body = req.body;
    let sql = `INSERT INTO playlists SET ?`
    let newPlaylist = 
    {
        "name" : body.name,
        "cover_img": body.cover_img,
        "created_at": body.created_at 
    };
    db.query(sql,newPlaylist,(err,result) => {
        if(err) return res.status(400).send(err.message);
        return res.status(201).json(body);
    })
});

app.post('/album' , (req,res) => {
    let body = req.body;
    let sql = `INSERT INTO albums SET ?`
    let newAlbum = 
    {
        "name" : body.name,
        "artist_id": body.artist_id,
        "cover_img": body.cover_img,
        "created_at": body.created_at 
    };
    db.query(sql,newAlbum,(err,result) => {
        if(err) return res.status(400).send(err.message);
         return res.status(201).json(body);
    })
});

app.post('/artist' , (req,res) => {
    let body = req.body;
    let sql = `INSERT INTO artists SET ?`
    let newArtist = 
    {
        "name" : body.name,
        "cover_img": body.cover_img,
        "upload_at": body.upload_at
    };
    db.query(sql,newArtist,(err,result) => {
        if(err) return res.status(400).send(err.message);
         return res.status(201).json(body);
    })
});

app.post('/song', (req,res) =>{
    let body = req.body;
    let sql = `INSERT INTO songs SET ?`
    let newSong = 
    {
        "title" : body.title,
        "artist_id": body.artist_id,
        "album_id": body.album_id,
        "length":body.length ,
        "track_number":body.track_number,
        "lyrics": body.lyrics,
        "created_at": body.created_at,
        "youtube_link": body.youtube_link
    };
    db.query(sql,newSong,(err,result) => {
        if(err)
        {
            console.log(err.message);
            if(err.errno === 1452){
                res.status(404).send("an invalid artist or album id's has been submited");
            }else{
                return res.status(400).send(err.message);
            }
        }else{
            return res.status(201).json(body);
        }
        console.log(result);
    })
});

app.put('/songs/:id' , (req,res) =>{
    let body = req.body;
    let sql = `Update songs SET ?  WHERE id = ${req.params.id}`
    db.query(sql,body,(err,result) => {
        if(err)
        {
            if(err.errno === 1452){
                return res.status(404).send("an invalid artist or album id's has been submited");
            }else{
                return res.status(400).send(err.message);
            }
        }else{
            return res.status(204).end();
        }
    })
})

app.put('/artist/:id' , (req,res) => {
    let body = req.body;
    let sql = `Update artists SET ? WHERE id = ${req.params.id}`; 
    db.query(sql,body,(err,result) => {
        if(err) throw err;
        return res.status(204).end();
    })
});

app.put('/albums/:id' , (req,res) => {
    let body = req.body;
    let sql = `Update albums SET ? WHERE id = ${req.params.id}`; 
    db.query(sql,body,(err,result) => {
        if(err) throw err;
        return res.status(204).end();
    })
});

app.put('/playlist/:id' , (req,res) => {
    let body = req.body;
    let sql = `Update playlists SET ? WHERE id = ${req.params.id}`; 
    db.query(sql,body,(err,result) => {
        if(err) throw err;
        return res.status(204).end();
    })
});

app.delete('/albums/:id' , (req,res) => {
    let body = req.body;
    let sql = `DELETE FROM albums WHERE id = ${req.params.id}`;
    db.query(sql,(err,result) => {
        if(err){
            if(err.errno===1452){
                return res.status(404).send("an invalid artist or album id's has been submited")
            }
            else{
                return res.status(400).send(err.message);
            }
        }
        else{
            return res.status(204).end();
        }
    })
})

app.delete('/artists/:id' , (req,res) => {
    let body = req.body;
    let sql = `DELETE FROM artists WHERE id = ${req.params.id}`;
    db.query(sql,(err,result) => {
        if(err){
            if(err.errno===1452){
                return res.status(404).send("an invalid artist or album id's has been submited")
            }
            else{
                return res.status(400).send(err.message);
            }
        }
        else{
            return res.status(204).end();
        }
    });
})

app.delete('/playlists/:id' , (req,res) => {
    let body = req.body;
    let sql = `DELETE FROM playlists WHERE id = ${req.params.id}`;
    db.query(sql,(err,result) => {
        if(err){
            return res.status(400).send(err.message);
        }
        else{
            return res.status(204).end();
        }
    });
})

app.delete('/songs/:id' , (req,res) => {
    let body = req.body;
    let sql = `DELETE FROM songs WHERE id = ${req.params.id}`;
    db.query(sql,(err,result) => {
        if(err){
            return res.status(400).send(err.message);
        }
        else{
            return res.status(204).end();
        }
    });
})

app.get('/top_songs', (req,res) =>{
    let sql = `SELECT songs.*,artists.name AS artist ,albums.name AS album,SUM(play_count) AS Num_Of_Listening FROM interactions JOIN songs ON songs.id = song_id JOIN albums ON albums.id = album_id JOIN artists ON artists.id = songs.artist_id GROUP by song_id ORDER BY Num_Of_Listening DESC Limit 5`;
    db.query(sql,(err,result) =>{
        if(err){
            return res.status(400).send(err.message);
        }
        else{
            res.send(result);
        }
    })
})

app.get('/top_playlists', (req,res) => {
    let sql = `SELECT  playlist_songs.playlist_id,playlists.name AS playlist,SUM(interactions.play_count) AS Num_Of_Listenings  FROM playlist_songs JOIN interactions ON interactions.id = playlist_songs.song_id JOIN playlists ON playlists.id = playlist_songs.playlist_id GROUP BY playlist_id ORDER BY- Num_Of_Listenings LIMIT 5`;
    db.query(sql,(err,result) =>{
        if(err){
            return res.status(400).send(err.message);
        }
        else{
            res.send(result);
        }
    })
})
app.get('/top_albums', (req,res) => {
    let sql = `SELECT albums.id AS album_id,albums.name AS album,artists.id AS artits_id,artists.name AS artist,SUM(play_count) AS Num_Of_Listening FROM interactions JOIN songs ON songs.id = song_id JOIN albums ON albums.id = album_id JOIN artists ON artists.id = songs.artist_id GROUP by album_id ORDER BY Num_Of_Listening DESC Limit 5`;
    db.query(sql,(err,result) =>{
        if(err){
            return res.status(400).send(err.message);
        }
        else{
            res.send(result);
        }
    })    
})

app.get('/top_artists', (req,res) => {
    let sql = `SELECT artists.id ,artists.name As artist,artists.cover_img,SUM(play_count) AS Num_Of_Listening FROM interactions JOIN songs ON songs.id = interactions.song_id JOIN artists ON artists.id = songs.artist_id GROUP by artist_id ORDER BY Num_Of_Listening DESC Limit 5`;
    db.query(sql,(err,result) =>{
        if(err){
            return res.status(400).send(err.message);
        }
        else{
            res.send(result);
        }
    })    
})





app.listen(8080, ()=> {
    console.log("Listening to port 8080...")
} )
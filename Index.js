const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
express.json();
app.use(express.json());


const db = mysql.createConnection({
    host : 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: 'spotify'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Connected to DB');
})

app.get('/songs', (req,res) => {
    let sql = `SELECT * FROM songs`;
    let query = db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/songs/:id', (req,res) => {
    let sql = `SELECT * FROM songs WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    }); 
});

app.get('/artists/:id', (req,res) => {
    let sql = `SELECT * FROM artists WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    }); 
});

app.get('/albums/:id', (req,res) => {
    let sql = `SELECT * FROM albums WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    }); 
});

app.get('/playlists/:id', (req,res) => {
    let sql = `SELECT * FROM playlists WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
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
        if(err) throw err;
        console.log(result);
        res.send(result);
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
        if(err) throw err;
        console.log(result);
        res.send(result);
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
        if(err) throw err;
        console.log(result);
        res.send(result);
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
            if(err.errno === 1452){
                return res.status(404).send("an invalid artist or album id's has been submited");
            }else{
                return res.status(400).send(err.message);
            }
        }else{
            return res.status(204).json(body);
        }
    })
})

app.put('/artist/:id' , (req,res) => {
    let body = req.body;
    let sql = `Update artists SET ? WHERE id = ${req.params.id}`; 
    let newArtist = 
    {
        "name" : body.name,
        "cover_img": body.cover_img,
        "upload_at": body.upload_at
    };
    db.query(sql,newArtist,(err,result) => {
        if(err) throw err;
        return res.status(204).json(body);
    })
});

app.put('/albums/:id' , (req,res) => {
    let body = req.body;
    let sql = `Update albums SET ? WHERE id = ${req.params.id}`; 
    let newAlbum = 
    {
        "name" : body.name,
        "artist_id": body.artist_id,
        "cover_img": body.cover_img,
        "created_at": body.created_at
    };
    db.query(sql,newAlbum,(err,result) => {
        if(err) throw err;
        return res.status(204).json(body);
    })
});

app.put('/playlist/:id' , (req,res) => {
    let body = req.body;
    let sql = `Update playlists SET ? WHERE id = ${req.params.id}`; 
    let newPlaylist = 
    {
        "name" : body.name,
        "cover_img": body.cover_img,
        "created_at": body.created_at
    };
    db.query(sql,newArtist,(err,result) => {
        if(err) throw err;
        return res.status(204).json(body);
    })
});




app.listen('3000', ()=> {
    console.log("Listening to port 3000...")
} )
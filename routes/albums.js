const { Router } = require('express');
const { Albums } = require('../models');

const router = Router();

router.get('/albums',(req,res)=>{
    let sql =`SELECT albums.*,artists.id AS artist_id,artists.name AS artist,artists.cover_img AS artist_img FROM albums JOIN artists ON albums.artist_id = artists.id ORDER BY name`;
    db.query(sql,(err,result) =>{
        if(err) return result.status(400).send(err.message);
        console.log(result);
        res.send(result);
    })
})

router.get('/albums/:id', (req,res) => {
    let sql = `SELECT albums.*, artists.name AS artist,artists.cover_img AS artist_img FROM albums
JOIN artists ON artists.id = albums.artist_id
WHERE albums.id=
 ${req.params.id}`;
    let query = db.query(sql, (err,result) => {
       if(err) return res.status(400).send(err.message);
        res.send(result);
    }); 
});

router.post('/album' , (req,res) => {
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

router.put('/albums/:id' , (req,res) => {
    let body = req.body;
    let sql = `Update albums SET ? WHERE id = ${req.params.id}`; 
    db.query(sql,body,(err,result) => {
        if(err) throw err;
        return res.status(204).end();
    })
});

router.delete('/albums/:id' , (req,res) => {
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

router.get('/top_albums', (req,res) => {
    let sql = `SELECT albums.id AS album_id,albums.name AS album,albums.cover_img AS album_img,artists.id AS artits_id,artists.name AS artist,SUM(play_count) AS Num_Of_Listening FROM interactions JOIN songs ON songs.id = song_id JOIN albums ON albums.id = album_id JOIN artists ON artists.id = songs.artist_id GROUP by album_id ORDER BY Num_Of_Listening DESC Limit 5`;
    db.query(sql,(err,result) =>{
        if(err){
            return res.status(400).send(err.message);
        }
        else{
            res.send(result);
        }
    })    
})

module.exports = router;

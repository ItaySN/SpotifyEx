const { Router } = require('express');
const { Artists } = require('../models');

const router = Router();

router.get('/artists',(req,res)=>{
    let sql =`SELECT id,name,cover_img AS artist_img FROM artists ORDER BY name`;
    db.query(sql,(err,result) =>{
        if(err) return result.status(400).send(err.message);
        console.log(result);
        res.send(result);
    })
})

router.get('/artists/:id', (req,res) => {
    console.log(req.params.id)
    let sql = `select songs.*,artists.name AS artist,albums.name AS album,artists.cover_img AS artist_img,albums.cover_img AS album_img
     from songs
      join artists on songs.artist_id=artists.id
       join albums on songs.album_id=albums.id
        where songs.artist_id = ${req.params.id}`;
    db.query(sql, (err,result) => {
        // if(err) return res.status(400).send(err.message);
        if(err) console.log(err.message);
        console.log(result);
        res.send(result);
    }); 
});

router.post('/artist' , (req,res) => {
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

router.put('/artist/:id' , (req,res) => {
    let body = req.body;
    let sql = `Update artists SET ? WHERE id = ${req.params.id}`; 
    db.query(sql,body,(err,result) => {
        if(err) throw err;
        return res.status(204).end();
    })
});

router.delete('/artists/:id' , (req,res) => {
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

router.get('/top_artists', (req,res) => {
    let sql = `SELECT artists.id ,artists.name As artist,artists.cover_img AS artist_img,SUM(play_count) AS Num_Of_Listening FROM interactions JOIN songs ON songs.id = interactions.song_id JOIN artists ON artists.id = songs.artist_id GROUP by artist_id ORDER BY Num_Of_Listening DESC Limit 5`;
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
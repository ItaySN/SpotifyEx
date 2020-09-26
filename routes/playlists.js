const { Router } = require('express');
const { Playlists } = require('../models');

const router = Router();

router.get('/playlists',(req,res)=>{
    let sql =`SELECT * FROM playlists`;
    db.query(sql,(err,result) =>{
        if(err) return result.status(400).send(err.message);
        console.log(result);
        res.send(result);
    })
})

router.get('/playlists/:id', (req,res) => {
    let sql = `select id, playlists.name AS name , playlists.cover_img AS playlist_img FROM playlists
WHERE playlists.id = ${req.params.id}`;
    let query = db.query(sql, (err,result) => {
       if(err) return res.status(400).send(err.message);
        res.send(result);
    }); 
});

router.post('/playlist' , (req,res) => {
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

router.put('/playlist/:id' , (req,res) => {
    let body = req.body;
    let sql = `Update playlists SET ? WHERE id = ${req.params.id}`; 
    db.query(sql,body,(err,result) => {
        if(err) throw err;
        return res.status(204).end();
    })
});

router.delete('/playlists/:id' , (req,res) => {
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

router.get('/top_playlists', (req,res) => {
    let sql = `SELECT  playlist_songs.playlist_id,playlists.name AS playlist,SUM(interactions.play_count) AS Num_Of_Listenings, playlists.cover_img AS playlist_img  FROM playlist_songs JOIN interactions ON interactions.id = playlist_songs.song_id JOIN playlists ON playlists.id = playlist_songs.playlist_id GROUP BY playlist_id ORDER BY- Num_Of_Listenings LIMIT 5`;
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

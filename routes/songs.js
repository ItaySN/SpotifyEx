const { Router } = require('express');
const { Songs } = require('../models');
const { Interactions } = require('../models');
const { Artists } = require('../models');
const { Albums } = require('../models');
const { Op, Model } = require('Sequelize')

const router = Router();

router.get('/', async (req, res) => {
    try {
        const songs = await Songs.findAll();
        res.send(songs);
    } catch (err) {
        res.status(500).send(err.message);
    }

})

router.post('/', async (req, res) => {
    try {
        let newSong = await Songs.create(req.body);
        res.send(newSong);
    } catch (err) {
        res.status(500).send(err.message);
    }

});

router.put('/:id', async (req, res) => {
    try {
        const updateSong = await Songs.update(req.body, { where: { id: req.params.id } });
        if (updateSong[0]) {
            res.status(201).send(`update song: ${req.params.id}`);
        }
        else {
            res.send(`No update`);
        }
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const updateSong = await Songs.destroy({ where: { id: req.params.id } });
        res.json(updateSong);

    } catch (err) {
        res.status(500).send(err.message);
    }
})

// router.get('/top', async (req, res) => {
//     try {
//         const songsIds = await Songs.topSongs(Interactions,Artists,Albums);
//         const songs = await Songs.findAll({
//             where: {
//                 id: {
//                     [Op.or]: [...songsIds],
//                 }
//             },
//         })
//         res.send(songs);
//     } catch (err) {
//         console.log(err)
//     }
// })

router.get('/top', async (req, res) => {
    try {
        const songsIds = await Songs.topSongs(Interactions);
        const songs = await Songs.findAll({
            where: {
                id: {
                    [Op.or]: [...songsIds],
                }
            },
            include: [
                {
                    model: Artists,
                    attributes: [
                        "id",
                        "name",
                        "artist_img"
                    ],
                },
                {
                    model: Albums,
                    attributes: [
                        "id",
                        "name",
                        "albumImg",
                    ],
                },
            ],
        })
        res.send(songs);
    } catch (err) {
        console.log(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const song = await Songs.findByPk(req.params.id);
        if (!song) {
            res.status(404).send("Song not found")
        }
        res.send(song);

    } catch (err) {
        res.status(500).send(err.message);
    }
});

// router.get("/songs",(req,res)=>{
//     let sql = `SELECT songs.*,albums.name As album, albums.cover_img as album_img,artists.cover_img AS artist_img, artists.name As artist FROM songs Join artists ON artists.id = songs.artist_id JOIN albums ON albums.id = songs.album_id ORDER BY songs.id`;
//     let query = db.query(sql,(err,result) => {
//         if(err) return result.status(400).send(err.message);
//         console.log(result);
//         res.send(result);
//     })
// })

// router.get('/songs/:id', (req,res) => {
//     let sql = `SELECT songs.*, artists.name AS artist , artists.id AS artist_id, albums.name AS album , albums.id AS album_id
// FROM songs
// JOIN artists ON artists.id = songs.artist_id
// JOIN albums ON albums.id = songs.album_id
// WHERE songs.id =  ${req.params.id}`;
//     let query = db.query(sql, (err,result) => {
//         if(err) return res.status(400).send(err.message);
//         res.send(result);
//     }); 
// });

// router.get('/songs_ByAlbum/:id',(req,res) =>{
//     let sql =`SELECT songs.*,albums.name As album, albums.cover_img as album_img
// ,artists.cover_img AS artist_img,artists.name As artist FROM songs
// Join artists ON artists.id = songs.artist_id
// JOIN albums ON albums.id = songs.album_id 
// WHERE songs.album_id = ${req.params.id}`;
//     let query = db.query(sql,(err,result) =>{
//         if(err) return res.status(400).send(err.message);
//         res.send(result);
//     })
// });

// router.get('/songs_ByPlaylist/:id',(req,res) =>{
//     let sql =`SELECT songs.id,songs.title,songs.artist_id,songs.album_id,songs.length,songs.lyrics,
//  artists.name AS artist,albums.name AS album, albums.cover_img AS album_img,
// playlist_songs.playlist_id FROM songs
// JOIN playlist_songs ON playlist_songs.song_id = songs.id
// JOIN albums on albums.id = songs.album_id
// JOIN artists ON artists.id = songs.artist_id
// WHERE playlist_songs.playlist_id = ${req.params.id}`;
//     let query = db.query(sql,(err,result) =>{
//         if(err) return res.status(400).send(err.message);
//         res.send(result);
//     })
// });

// router.post('/song', (req,res) =>{
//     let body = req.body;
//     let sql = `INSERT INTO songs SET ?`
//     let newSong = 
//     {
//         "title" : body.title,
//         "artist_id": body.artist_id,
//         "album_id": body.album_id,
//         "length":body.length ,
//         "track_number":body.track_number,
//         "lyrics": body.lyrics,
//         "created_at": body.created_at,
//         "youtube_link": body.youtube_link
//     };
//     db.query(sql,newSong,(err,result) => {
//         if(err)
//         {
//             console.log(err.message);
//             if(err.errno === 1452){
//                 res.status(404).send("an invalid artist or album id's has been submited");
//             }else{
//                 return res.status(400).send(err.message);
//             }
//         }else{
//             return res.status(201).json(body);
//         }
//         console.log(result);
//     })
// });

// router.put('/songs/:id' , (req,res) =>{
//     let body = req.body;
//     let sql = `Update songs SET ?  WHERE id = ${req.params.id}`
//     db.query(sql,body,(err,result) => {
//         if(err)
//         {
//             if(err.errno === 1452){
//                 return res.status(404).send("an invalid artist or album id's has been submited");
//             }else{
//                 return res.status(400).send(err.message);
//             }
//         }else{
//             return res.status(204).end();
//         }
//     })
// })

// router.delete('/songs/:id' , (req,res) => {
//     let body = req.body;
//     let sql = `DELETE FROM songs WHERE id = ${req.params.id}`;
//     db.query(sql,(err,result) => {
//         if(err){
//             return res.status(400).send(err.message);
//         }
//         else{
//             return res.status(204).end();
//         }
//     });
// })

// router.get('/top_songs', (req,res) =>{
//     let sql = `SELECT songs.*,artists.name AS artist,albums.cover_img AS album_img,albums.name AS album,SUM(play_count) AS Num_Of_Listening FROM interactions 
// JOIN songs ON songs.id = song_id
// JOIN albums ON albums.id = album_id
// JOIN artists ON artists.id = songs.artist_id
// GROUP by song_id
// ORDER BY Num_Of_Listening DESC
// Limit 20`;
//     db.query(sql,(err,result) =>{
//         if(err){
//             return res.status(400).send(err.message);
//         }
//         else{
//             res.send(result);
//         }
//     })
// })

// router.get('/from_topSong/:id',(req,res) =>{
//     let sql=`SELECT songs.*,artists.name AS artist ,albums.name AS album,SUM(play_count) AS Num_Of_Listening FROM interactions 
// JOIN songs ON songs.id = song_id
// JOIN albums ON albums.id = album_id
// JOIN artists ON artists.id = songs.artist_id
// GROUP by song_id 
// ORDER BY Num_Of_Listening DESC
// Limit 20;
// `
//     db.query(sql,(err,result) =>{
//         if(err){
//             return res.status(400).send(err.message);
//         }
//         else{
//             res.send(result);
//         }
//     })
// })

module.exports = router;
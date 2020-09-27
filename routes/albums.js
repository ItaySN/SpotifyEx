const { Router } = require('express');
const { Albums } = require('../models');
const {Interactions} = require('../models');
const {Songs} = require('../models');





const router = Router();

router.get('/',async (req,res) => {
    try{
        const albums = await Albums.findAll();
        res.send(albums);
    }catch(err){
        res.status(500).send(err.message);
    }

})

router.post('/' , async(req,res) => {
    try{
        let newAlbum = await Albums.create(req.body);
        res.send(newAlbum);
    }catch(err){
        res.status(500).send(err.message);
    }
    
});

router.put('/:id' ,async (req,res) => {
    try{
        const updateAlbum = await Albums.update(req.body,{where:{id:req.params.id}});
        if(updateAlbum[0]){
            res.status(201).send(`update album: ${req.params.id}`);
        }
        else{
            res.send(`No update`);
        }
    }
    catch(err){ 
        res.status(500).send(err.message);
    }
});

router.delete('/:id' , async (req,res) => {
   try{ 
        const updateAlbum = await Albums.destroy({ where: { id: req.params.id } });
        res.json(updateAlbum);

   }catch(err){
        res.status(500).send(err.message);
   }
})

router.get('/restore/:id' , async (req,res) => {
    try{
        const resoreAlbum = await Albums.restore({where:{id:req.params.id}});
        res.json(resoreAlbum);
    }catch(err){
        res.status(500).send(err.message);
    }
})

// router.get('/top' ,async (req,res) => {
//     try{
//         Albums.getTotalSongsPlays();
//     res.send("ok");
//     }catch(err){
//         console.log(err)
//     }
// })

router.get('/:id', async (req, res) => {
    try {
        const album = await Albums.findByPk(req.params.id);
        if (!album) {
            res.status(404).send("album not found")
        }
        res.send(album);

    } catch (err) {
        res.status(500).send(err.message);
    }
});


// router.get('/top_albums', (req,res) => {
//     let sql = `SELECT albums.id AS album_id,albums.name AS album,albums.cover_img AS album_img,artists.id AS artits_id,artists.name AS artist,SUM(play_count) AS Num_Of_Listening
//      FROM interactions
//      JOIN songs ON songs.id = song_id JOIN albums ON albums.id = album_id
//       JOIN artists ON artists.id = songs.artist_id
//        GROUP by album_id
//        ORDER BY Num_Of_Listening DESC
//         Limit 5`;
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

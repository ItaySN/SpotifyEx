const { Router } = require('express');
const { Artists } = require('../models');
const { Interactions } = require('../models');
const { Songs } = require('../models');
const { Albums } = require('../models');
const { Op, Model } = require('Sequelize')

const router = Router();

router.get('/', async (req, res) => {
    try {
        const artists = await Artists.findAll();
        res.send(artists);
    } catch (err) {
        res.status(500).send(err.message);
    }

})

router.post('/', async (req, res) => {
    try {
        let newArtist = await Artists.create(req.body);
        res.send(newArtist);
    } catch (err) {
        res.status(500).send(err.message);
    }

});

router.put('/:id', async (req, res) => {
    try {
        const updateArtist = await Artists.update(req.body, { where: { id: req.params.id } });
        if (updateArtist[0]) {
            res.status(201).send(`update artist: ${req.params.id}`);
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
        const updateArtist = await Artists.destroy({ where: { id: req.params.id } });
        res.json(updateArtist);

    } catch (err) {
        res.status(500).send(err.message);
    }
})

router.get('/top', async (req, res) => {
    try {
        const artistsId = await Artists.topArtists(Songs, Interactions);
        const artists = await Artists.findAll({
            where: {
                id: {
                    [Op.or]: [...artistsId],
                }
            },
        })
        res.send(artists);
    } catch (err) {
        console.log(err)
    }
})

router.get('/songsByArtist/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const songs = await Artists.songsByArtist(Songs,Albums,id)
        res.send(songs)
    }catch(err){
        res.status(500).send(err.message);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const artist = await Artists.findByPk(req.params.id);
        if (!artist) {
            res.status(404).send("album not found")
        }
        res.send(artist);

    } catch (err) {
        res.status(500).send(err.message);
    }
});

// router.get('/top_artists', (req,res) => {
//     let sql = `SELECT artists.id ,artists.name As artist,artists.cover_img AS artist_img,SUM(play_count) AS Num_Of_Listening FROM interactions JOIN songs ON songs.id = interactions.song_id JOIN artists ON artists.id = songs.artist_id GROUP by artist_id ORDER BY Num_Of_Listening DESC Limit 5`;
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
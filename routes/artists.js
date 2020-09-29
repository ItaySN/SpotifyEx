const { Router } = require('express');
const { Artists } = require('../models');
const { Interactions } = require('../models');
const { Songs } = require('../models');
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




// router.get('/artists/:id', (req,res) => {
//     console.log(req.params.id)
//     let sql = `select songs.*,artists.name AS artist,albums.name AS album,artists.cover_img AS artist_img,albums.cover_img AS album_img
//      from songs
//       join artists on songs.artist_id=artists.id
//        join albums on songs.album_id=albums.id
//         where songs.artist_id = ${req.params.id}`;
//     db.query(sql, (err,result) => {
//         // if(err) return res.status(400).send(err.message);
//         if(err) console.log(err.message);
//         console.log(result);
//         res.send(result);
//     }); 
// });

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
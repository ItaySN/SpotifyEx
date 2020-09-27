const { Router } = require('express');
const { Playlists } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const playlists = await Playlists.findAll();
        res.send(playlists);
    } catch (err) {
        res.status(500).send(err.message);
    }

})

router.post('/', async (req, res) => {
    try {
        let newPlaylist = await Playlists.create(req.body);
        res.send(newPlaylist);
    } catch (err) {
        res.status(500).send(err.message);
    }

});

router.put('/:id', async (req, res) => {
    try {
        const updatePlaylist = await Playlists.update(req.body, { where: { id: req.params.id } });
        if (updatePlaylist[0]) {
            res.status(201).send(`update Playlist: ${req.params.id}`);
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
        const updatePlaylist = await Playlists.destroy({ where: { id: req.params.id } });
        res.json(updatePlaylist);

    } catch (err) {
        res.status(500).send(err.message);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const playlist = await Playlists.findByPk(req.params.id);
        if (!playlist) {
            res.status(404).send("Playlist not found")
        }
        res.send(artist);

    } catch (err) {
        res.status(500).send(err.message);
    }
});

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

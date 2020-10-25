const { Router } = require('express');
const { Playlists } = require('../models');
const { Interactions } = require('../models');
const { PlaylistSongs } = require('../models');
const { Songs } = require('../models');
const { Artists } = require('../models');
const { Albums } = require('../models');
const { Op, Model } = require('Sequelize')


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

router.get('/songsByPlaylist/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const songs = await PlaylistSongs.songsByPlaylist(Songs,Artists,Albums,id)
        res.send(songs)
    }catch(err){
        res.status(500).send(err.message);
    }
})

router.get('/top', async (req, res) => {
    try {
        const playlistsId = await PlaylistSongs.topPlaylists(Playlists,Songs,Interactions);
        const playlists = await Playlists.findAll({
            where: {
                id: {
                    [Op.or]: [...playlistsId],
                }
            },
            // include: [
            //     {
            //         model: Songs,
            //         include: [
            //             {
            //                 model: Artists,
            //                 attributes: [
            //                     "id",
            //                     "name",
            //                     "artistImg",
            //                 ],
            //                 include: [
            //                     {
            //                         model: Albums,
            //                         attributes: [
            //                             "id",
            //                             "name",
            //                             "albumImg",
            //                         ],
            //                     }
            //                 ],
            //             }
            //         ]
            //     }
            // ],
        })
        res.send(playlists);
    } catch (err) {
        console.log(err)
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

module.exports = router;

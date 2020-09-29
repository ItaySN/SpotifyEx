const { Router } = require('express');
const { Albums } = require('../models');
const {Interactions} = require('../models');
const {Songs} = require('../models');
const {Op, Model} = require('Sequelize')
const {Artists} = require('../models');




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

router.get('/top' ,async (req,res) => {
    try{
    const albumsIds = await Albums.getTotalSongsPlays(Songs,Interactions);
    const albums = await Albums.findAll({
        where:{
            id: {
                [Op.or]: [...albumsIds],
            }
        },
        include:[
            {
                model:Artists,
                attributes:[
                    "name",
                    "artist_img"
                ]       
            }
        ]
    })
    res.send(albums);
    }catch(err){
        console.log(err)
    }
})

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



module.exports = router;

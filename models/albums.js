'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Albums extends Model {
    
   static async getTotalSongsPlays(Songs,Interactions) {
     try{
       const albums = await this.findAll({
         include: [
           {
              model: Songs,
              attributes:[
                "id"
              ],
              include: [
                {
                  model: Interactions,
                  attributes: [
                      "playCount"
                  ]
                }
              ]
           }
         ],
         attributes:[
           "id",
           "name"
         ]
       });
       const albumsRate = [];
       for (let album of albums) {
         let sum = 0;
         for (let song of album.Songs) {
           for (let interaction of song.Interactions) {
             sum += interaction.playCount
           }
         }
         albumsRate.push([album.id, sum])
       }
       albumsRate.sort((a, b) => {
         return b[1] - a[1];
       }) 
       const albumIds = []
       for (let album of albumsRate.slice(0, 2)) {
         albumIds.push(album[0])
       }
        return(albumIds);
      }
     catch(err){
       console.log(err);
     }
    }

    static async songsByAlbum(Songs,Artists,id){
      try{
        const songs = await this.findByPk(id,{
          include:[
            {
              model: Songs,
              include: [
                {
                  model: Artists,
                  attributes: [
                    ["id","artist_id"],
                    "name",
                    "artistImg",
                  ]
                }
              ]
            }
          ]
        })
        
        return(songs)
      }catch(err){
        console.log(err);
      }
    }

    static associate(models) {
      this.hasMany(models.Songs,{
        foreignKey:"albumId",
      });
      this.belongsTo(models.Artists,{
        foreignKey:"artistId",
        onDelete="CASCADE"
      });
    }
  };
  Albums.init({
    name:{
      type: DataTypes.STRING,
    },
    artistId: {
      type:DataTypes.INTEGER,
      field:"artist_id"
    },
    albumImg:{
      type:DataTypes.STRING,
      field:"album_img"
    } ,
  }, {
    sequelize,
    modelName: 'Albums',
    paranoid:true,
  });
  return Albums;
};
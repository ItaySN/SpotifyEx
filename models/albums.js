const {Interactions} = require('../models');
const { Songs } = require('../models');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Albums extends Model {
    
   static async getTotalSongsPlays() {
     try{
       const albums = await this.findAll({
         include: [
           {
             model: Songs,
             include: [
               {
                 models: Interactions,
                 attributes: [sequelize.fn('sum', sequelize.col('play_count')), 'total_plays']
               }
             ]
           }
         ]
       });
       console.log(albums);
     }
     catch(err){
       console.log(err);
     }
    }


    static associate(models) {
      this.hasMany(models.Songs,{
        foreignKey:"albumId",
      });
      this.belongsTo(models.Artists,{
        foreignKey:"artistId",
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
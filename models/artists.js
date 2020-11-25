'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artists extends Model {
    
    static async topArtists(Songs, Interactions) {
      try {
        const artists = await this.findAll({
          include: [
            {
              model: Songs,
              attributes: [
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
        });
        const artistRate = [];
        for (let artist of artists) {
          let sum = 0
          for (let song of artist.Songs) {
            for (let interaction of song.Interactions) {
              sum += interaction.playCount
            }
          }
          artistRate.push([artist.id, sum])
        }
        artistRate.sort((a, b) => {
          return b[1] - a[1];
        })
        const artistsId = []
        for (let artist of artistRate.slice(0, 2)) {
          artistsId.push(artist[0])
        }
        return (artistsId);
      }
      catch (err) {
        console.log(err);
      }
    }
    
    static async songsByArtist(Songs,Albums,id){
      try{
        const songs = await this.findByPk(id, {
          include:[
            {
              model:Songs,
              include:[
                {
                  model:Albums,
                  attributes:[
                    "id",
                    "name",
                    "albumImg"
                  ],
                }
              ],
            }
          ]
        })
        return(songs);
      }catch (err) {
        console.log(err);
      }
    }

    static async albumsByArtist(Albums,id){
      try{
        const albums = this.findByPk(id,{
          include:[
            {
              model:Albums,
              attributes:[
                "id",
                "name",
                "albumImg"
              ]
            }
          ]
        })
        return albums;
      }catch(err){
        console.log(err.message)
      }
    }

    static associate(models) {
      this.hasMany(models.Songs,
        {
          foreignKey:"artistId",
        });
      this.hasMany(models.Albums,{
        foreignKey:"artistId",
      });
    }
  };
  Artists.init({
    name: DataTypes.STRING,
    artistImg:{
      type: DataTypes.STRING,
      field:"artist_img",
    }, 
  }, {
    sequelize,
    modelName: 'Artists',
    paranoid:true,
  });
  return Artists;
};
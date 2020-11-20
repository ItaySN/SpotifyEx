'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Songs extends Model {
    static async topSongs(Interactions) {
      try {
        console.log('started --------')
        const songs = await this.findAll({
          include: [
            {
              model: Interactions,
              attributes: [
                "playCount"
              ],
            }
          ],
        });
        const songsRate = [];
        for(let song of songs){
          console.log('for loop 1 -----------')
          let playCount;
          for(let interaction of song.Interactions){
            console.log('for loop 2 --------');
            playCount = interaction.playCount || 0 ;
          }
          songsRate.push([song.id,playCount])
          console.log('songs rate ' , songsRate);
        }
        songsRate.sort((a, b) => {
          return b[1] - a[1];
        })
        console.log('sorted ---------')
        const songsIds = []
        for (let song of songsRate.slice(0, 2)) {
          songsIds.push(song[0])
        }
        return (songsIds);
      }
      catch (err) {
        console.log(err);
      }
    }
    static associate(models) {
      this.hasMany(models.Interactions,
        {
          foreignKey:"songId",
        });
      this.belongsTo(models.Artists,
        {
          foreignKey:"artistId",
          onDelete="CASCADE"
        });
        this.belongsTo(models.Albums,
          {
            foreignKey:"albumId",
            onDelete="CASCADE"
          });
      this.belongsToMany(models.PlaylistSongs,
        {
          through: model.PlaylistSongs,
          foreignKey:"songId",
          onDelete="CASCADE"
        });
    }
  };
  Songs.init({
    title: DataTypes.STRING,
    albumId:{
      type:DataTypes.INTEGER,
      field:"album_id",
    },
    artistId:{
      type:DataTypes.INTEGER,
      field:"artist_id",
    },
    youtubeLink:{
      type:DataTypes.STRING,
      field:"youtube_link",
    }
  }, {
    sequelize,
    modelName: 'Songs',
    paranoid:true,

  });
  return Songs;
};
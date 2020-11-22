'use strict';
const {
  Model, where
} = require('sequelize');
const songs = require('./songs');
module.exports = (sequelize, DataTypes) => {
  class playlistSongs extends Model {
    static async songsByPlaylist(Songs, Artists, Albums, id) {
      try {
        const songs = await this.findAll({
            include: [
              {                             
                model: Songs,
                include: [
                  {
                    model: Artists,
                    attributes: [
                      "id",
                      "name",
                      "artistImg",
                    ],
                    include: [
                      {
                        model: Albums,
                        attributes: [
                          "id",
                          "name",
                          "albumImg",
                        ],
                      }
                    ]
                  }
                ]
              }
            ],
            where: 
              {
                playlistId : id
              }
            ,
        })
        return (songs)
      } catch (err) {
        console.log(err)
      }
    }

    static async topPlaylists(Playlists,Songs,Interactions) {
      try {
        const playlists = await this.findAll({
          include: [
            {
              model: Songs,
              include: [
                {
                  model:Interactions,
                  attributes:[
                    "playCount",
                  ],
                  
                }
              ],
              model: Playlists,
              attributes: [
                "playlistId"
              ]
            }
          ],
        })
        const playlistRate = [];
        for(let playlist of playlists){
          let sum = 0;
          for(let song of playlistSong.Songs){
            for(let interaction of song.Interactions){
              sum += interaction.playCount;
            }
          }
          playlistRate.push([playlist.id,sum]);
        }
        playlistRate.sort(a,b => {
          return b[1] - a[1];
        })
        const playlistsIds = [];
        for(let playlist of playlistRate.slice(0,1)){
          playlistsIds.push(playlist[0]);
        }
        return (playlistsIds)
      } catch (err) {
        console.log(err)
      }
    }
    static associate(models) {
      this.belongsTo(models.Songs,{
        foreignKey:"songId",
        onDelete:"CASCADE"

      })
      this.belongsTo(models.Playlists,{
        foreignKey:"playlistId",
        onDelete:"CASCADE"
      })
    }
  };
  playlistSongs.init({
    playlistId: {
      type:DataTypes.INTEGER,
      field:"playlist_id"
    },
    songId: {
      type:DataTypes.INTEGER,
      field:"song_id",
    },
  }, {
    sequelize,
    modelName: 'PlaylistSongs',
    paranoid:true,

  });
  return playlistSongs;
};
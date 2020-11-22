'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlists extends Model {
    // static async topPlaylists(Songs, Interactions,PlaylistSongs) {
    //   try {
    //     const playlists = await this.findAll({
    //       include: [
    //         {
    //           model: PlaylistSongs,
    //           attributes: [
    //             "playlistId"
    //           ],include:[ 
    //             {
                  
    //               model: Songs,
    //               attributes: [
    //                 "id"
    //               ],
    //               include: [
    //                 {
    //                   model: Interactions,
    //                   attributes: [
    //                     "playCount"
    //                   ]
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ],
    //     });
    //     const playlistRate = [];
    //     for (let playlist of playlists) {
    //       let sum = 0
    //       for (let song of playlist.Songs) {
    //         for (let interaction of song.Interactions) {
    //           sum += interaction.playCount
    //         }
    //       }
    //       playlistRate.push([playlist.id, sum])
    //     }
    //     playlistRate.sort((a, b) => {
    //       return b[1] - a[1];
    //     })
    //     const playlistsId = []
    //     for (let playlist of playlistRate.slice(0, 2)) {
    //       playlistsId.push(playlist[0])
    //     }
    //     return (playlistsId);
    //   }
    //   catch (err) {
    //     console.log(err);
    //   }
    // }

        static associate(models) {
      this.belongsToMany(models.Songs,
        {
          through: models.PlaylistSongs,
          foreignKey:"playlistId",
          onDelete:"CASCADE"
        });
    }
  };
  Playlists.init({
    name: DataTypes.STRING,
    playlistImg: {
      type:DataTypes.STRING,
      field:"playlist_img",
    },
  }, {
    sequelize,
    modelName: 'Playlists',
    paranoid:true,

  });
  return Playlists;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class playlistSongs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Songs,{
        foreignKey:"songId",
      })
      this.belongsTo(models.Playlists,{
        foreignKey:"playlistId",
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
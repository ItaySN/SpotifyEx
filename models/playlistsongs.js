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
      // define association here
    }
  };
  playlistSongs.init({
    playlistId: {
      DataTypes:INTEGER,
      field:"playlist_id"
    },
    songId: {
      DataTypes:INTEGER,
      field:"song_id",
    },
  }, {
    sequelize,
    modelName: 'PlaylistSongs',
    paranoid:true,

  });
  return playlistSongs;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Playlists.init({
    name: DataTypes.STRING,
    playlistImg: {
      DataTypes:STRING,
      field:"playlist_img",
    },
  }, {
    sequelize,
    modelName: 'Playlists',
    paranoid:true,

  });
  return Playlists;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Albums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Albums.init({
    name:{
      DataTypes:STRING,
    },
    artistId: {
      DataTypes:INTEGER,
      field:"artist_id"
    },
    albumImg:{
      DataTypes:STRING,
      field:"album_img"
    } ,
  }, {
    sequelize,
    modelName: 'Albums',
    paranoid:true,
  });
  return Albums;
};
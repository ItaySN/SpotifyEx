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
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Artists.init({
    name: DataTypes.STRING,
    artistImg:{
      DataTypes:STRING,
      field:"artist_img",
    }, 
  }, {
    sequelize,
    modelName: 'Artists',
    paranoid:true,
  });
  return Artists;
};
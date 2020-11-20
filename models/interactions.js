'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class interactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.belongsTo(models.Users,{
       foreignKey:"userId",
       onDelete="CASCADE"
     })
     this.belongsTo(models.Songs,{
       foreignKey:"songId",
       onDelete="CASCADE"
     })
    }
  };
  interactions.init({
    userId:{
      type: DataTypes.INTEGER,
      field:"user_id"
    }, 
      
    songId: {
      type:DataTypes.INTEGER,
      field:"song_id",
    },
    isLiked:{
      type:DataTypes.BOOLEAN,
      field:"is_liked",
    },
    
    playCount: {
      type:DataTypes.INTEGER,
      field:"play_count"
  },
  }, {
    sequelize,
    modelName: 'Interactions',
    paranoid:true,
  });
  return interactions;
};
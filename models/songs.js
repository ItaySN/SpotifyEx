'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.PlaylistSongs,
        {
          foreignKey:"songId",
        });
      this.hasMany(models.Interactions,
        {
          foreignKey:"songId",
        });
      this.belongsTo(models.Artists,
        {
          foreignKey:"artistId",
        });
        this.belongsTo(models.Albums,
          {
            foreignKey:"albumId",
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
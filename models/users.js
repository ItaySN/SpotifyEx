

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Interactions,{
        foreignKey:"userId",
      })
    }
  };
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin:{
      type:DataTypes.BOOLEAN,
      field:"is_admin",
    },
    preferences: DataTypes.JSON,
    rememberToken:{
      type:DataTypes.BOOLEAN,
      field:"remember_token",
    },
  }, {
    sequelize,
    modelName: 'Users',
    paranoid:true,

  });
  return Users;
};
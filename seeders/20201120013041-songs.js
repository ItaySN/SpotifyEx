'use strict';
const songs = require('./songs.json')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("songs",songs);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

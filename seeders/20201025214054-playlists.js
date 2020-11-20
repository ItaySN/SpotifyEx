'use strict';
const playlists = require('./playlists.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("playlists",playlists);
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

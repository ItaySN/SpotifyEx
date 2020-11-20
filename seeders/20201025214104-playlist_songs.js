'use strict';
const playlistsSongs = require('./playlist_songs.json')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("playlist_songs",playlistsSongs);
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

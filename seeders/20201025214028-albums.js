'use strict';
const albums = require('./albums.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("albums",albums);
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

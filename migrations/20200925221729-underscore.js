"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("songs", "deleted_at", {
      type: Sequelize.DATE,
      allowNull: true,
      validate: {},
    });
    await queryInterface.addColumn("albums", "deleted_at", {
      type: Sequelize.DATE,
      allowNull: true,
      validate: {},
    });
    await queryInterface.addColumn("artists", "deleted_at", {
      type: Sequelize.DATE,
      allowNull: true,
      validate: {},
    });
    await queryInterface.addColumn("interactions", "deleted_at", {
      type: Sequelize.DATE,
      allowNull: true,
      validate: {},
    });
    await queryInterface.addColumn("playlists", "deleted_at", {
      type: Sequelize.DATE,
      allowNull: true,
      validate: {},
    });
    await queryInterface.addColumn("playlistsongs", "deleted_at", {
      type: Sequelize.DATE,
      allowNull: true,
      validate: {},
    });
    await queryInterface.addColumn("users", "deleted_at", {
      type: Sequelize.DATE,
      allowNull: true,
      validate: {},
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("albums", "deleted_at");
    await queryInterface.removeColumn("artists", "deleted_at");
    await queryInterface.removeColumn("interactions", "deleted_at");
    await queryInterface.removeColumn("playlists", "deleted_at");
    await queryInterface.removeColumn("playlistsongs", "deleted_at");
    await queryInterface.removeColumn("users", "deleted_at");
    await queryInterface.removeColumn("songs", "deleted_at");

  },
};
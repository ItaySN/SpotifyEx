'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("albums","createdAt","created_at")
    await queryInterface.renameColumn("albums","updatedAt","updated_at")
    await queryInterface.renameColumn("albums","artistId","artist_id")
    await queryInterface.renameColumn("albums","albumImg","album_img")

    await queryInterface.renameColumn("artists","createdAt","created_at")
    await queryInterface.renameColumn("artists","updatedAt","updated_at")
    await queryInterface.renameColumn("artists","artistImg","artist_img")

    await queryInterface.renameColumn("interactions","createdAt","created_at")
    await queryInterface.renameColumn("interactions","updatedAt","updated_at")
    await queryInterface.renameColumn("interactions","userId","user_id")
    await queryInterface.renameColumn("interactions","songId","song_id")
    await queryInterface.renameColumn("interactions","isLiked","is_liked")
    await queryInterface.renameColumn("interactions","playCount","play_count")

    await queryInterface.renameColumn("playlists","createdAt","created_at")
    await queryInterface.renameColumn("playlists","updatedAt","updated_at")
    await queryInterface.renameColumn("playlists","playlistImg","playlist_img")


    await queryInterface.renameColumn("playlistsongs","createdAt","created_at")
    await queryInterface.renameColumn("playlistsongs","updatedAt","updated_at")
    await queryInterface.renameColumn("playlistsongs","playlistId","playlist_id")
    await queryInterface.renameColumn("playlistsongs","songId","song_id")

    await queryInterface.renameColumn("songs","createdAt","created_at")
    await queryInterface.renameColumn("songs","updatedAt","updated_at")
    await queryInterface.renameColumn("songs","albumId","album_id")
    await queryInterface.renameColumn("songs","artistId","artist_id")
    await queryInterface.renameColumn("songs","youtubeLink","youtube_link")
    await queryInterface.renameColumn("songs","trackNumber","track_number")

    await queryInterface.renameColumn("users","createdAt","created_at")
    await queryInterface.renameColumn("users","updatedAt","updated_at")
    await queryInterface.renameColumn("users","isAdmin","is_admin")
    await queryInterface.renameColumn("users","rememberToken","remember_token")
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("artists","created_at","createdAt")
    await queryInterface.renameColumn("artists","updated_at","updatedAt")
    await queryInterface.renameColumn("artists","artist_img","artistImg")

    await queryInterface.renameColumn("albums","created_at","createdAt")
    await queryInterface.renameColumn("albums","updated_at","updatedAt")
    await queryInterface.renameColumn("albums","artist_id","artistId")
    await queryInterface.renameColumn("albums","album_img","albumImg")

    await queryInterface.renameColumn("interactions","created_at","createdAt")
    await queryInterface.renameColumn("interactions","updated_at","updatedAt")
    await queryInterface.renameColumn("interactions","user_id","userId")
    await queryInterface.renameColumn("interactions","song_id","songId")
    await queryInterface.renameColumn("interactions","is_liked","isLiked")
    await queryInterface.renameColumn("interactions","play_count","playCount")

    await queryInterface.renameColumn("playlists","created_at","createdAt")
    await queryInterface.renameColumn("playlists","updated_at","updatedAt")
    await queryInterface.renameColumn("playlists","playlist_img","playlistImg")

    await queryInterface.renameColumn("playlistsongs","created_at","createdAt")
    await queryInterface.renameColumn("playlistsongs","updated_at","updatedAt")
    await queryInterface.renameColumn("playlistsongs","playlist_id","playlistId")
    await queryInterface.renameColumn("playlistsongs","song_id","songId")

    await queryInterface.renameColumn("songs","created_at","createdAt")
    await queryInterface.renameColumn("songs","updated_at","updatedAt")
    await queryInterface.renameColumn("songs","album_id","albumId")
    await queryInterface.renameColumn("songs","artist_id","artistId")
    await queryInterface.renameColumn("songs","youtube_link","youtubeLink")
   

    await queryInterface.renameColumn("users","created_at","createdAt")
    await queryInterface.renameColumn("users","updated_at","updatedAt")
    await queryInterface.renameColumn("users","is_admin","isAdmin")
    await queryInterface.renameColumn("users","remember_token","rememberToken")
  }
};
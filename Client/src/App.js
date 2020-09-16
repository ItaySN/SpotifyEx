import React from 'react';
import './App.css';
import Header from './Componnents/Header.js';
import TopSongs from './Componnents/Songs/TopSongs';
import TopArtist from './Componnents/Artists/TopArtists';
import TopAlbums from './Componnents/Albums/TopAlbums';



function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <div className="section">
          <TopSongs/>
      </div>
      <div className="section">
          <TopArtist/>
      </div>
      <div className="section">
          <TopAlbums/>
      </div>
      <div className="section">
          Top Playlist
      </div>
    </div>
    </>
  );
}

export default App;

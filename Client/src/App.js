import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Componnents/Header.js';
import TopSongs from './Componnents/TopSongs';
 import TopArtists from './Componnents/TopArtists';



function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <div className="section">
          <TopSongs/>
      </div>
      <div className="section">
          <TopArtists/>
      </div>
      <div className="section">
          blflflf
      </div>
      <div className="section">
          blalblala
      </div>
    </div>
    </>
  );
}

export default App;

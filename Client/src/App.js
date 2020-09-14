import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddSong from'./Componnents/AddSong.js';
import axios from 'axios';
import Header from './Componnents/Header.js';
import Songs from './Componnents/Songs';
import TopSongs from './Componnents/TopSongs';



function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <div>
        <TopSongs/>
      </div>
      
    </div>
    </>
  );
}

export default App;

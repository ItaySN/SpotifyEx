import React, { useState, useEffect } from 'react';
// import useForm from 'react-hook-forms';
import axios from 'axios';
import Song from './Song.js';
import Header from './Header.js';
import './TopSongs.css'

function TopSongs(){
    const [topSongs,setTopSongs] = useState([]);

    const getAllSongs = async () => {
    try {
      const res = await axios.get('/top_songs');
      setTopSongs(res.data);
      console.log(res.data);
    }catch (err) {
      console.error(err.message);
    }
    };

    useEffect(()=>{
        getAllSongs();
    },[])

    // const [newSong,setNewSong] = useState({

    // });    
    return(
        <>
        <Header/>
        <div className="topSongsDiv">
            <h1>Top Songs</h1>  
            {topSongs.map((song) =>{
                return <Song data={song} />
            })}

        </div>
        </>
    )

}
export default TopSongs;
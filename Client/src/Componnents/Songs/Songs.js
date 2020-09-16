import React, { useState, useEffect } from 'react';
// import useForm from 'react-hook-forms';
import axios from 'axios';
import './Songs.css'
import Song from '../Songs/Song.js';
import Header from '../Header.js';



function Songs(props){
    const [songs,setSongs] = useState([]);

    const getAllSongs = async () => {
    try {
      const res = await axios.get('/songs');
      setSongs(res.data);
      console.log(res.data);
    }catch (err) {
      console.error(err.message);
    }
    };

    useEffect(()=>{
        getAllSongs();
    },[])

    
    return(
        <>
        <Header/>
        <div className="allSongs">
            <h1>Songs List:</h1>
            {songs.map((song) =>{
                return <Song data={song} />
            })}

        </div>
        </>
    )

}
export default Songs;
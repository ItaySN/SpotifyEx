import React, { useState, useEffect } from 'react';
// import useForm from 'react-hook-forms';
import axios from 'axios';
import Artist from './Artist.js';
// import Header from './Header.js';
import './TopArtists.css'

function TopArtists(){
    const [topArtists,setTopArtists] = useState([]);

    const getTopArtists = async () => {
    try {
      const res = await axios.get('/top_artists');
      setTopArtists(res.data);
      console.log(res.data);
    }catch (err) {
      console.error(err.message);
    }
    };

    useEffect(()=>{
        getTopArtists();
    },[])

    // const [newSong,setNewSong] = useState({

    // });    
    return(
        <>
        
        <div className="topArtistsDiv">
            <h1>Top Artists</h1>  
            {topArtists.map((artist) =>{
                return <Artist data={artist} />
            })}

        </div>
        </>
    )

}
export default TopArtists;
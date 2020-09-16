import React, { useState, useEffect } from 'react';
// import useForm from 'react-hook-forms';
import axios from 'axios';
import './TopSongs.css';
import TopSong from './TopSong';
import Carousel from 'react-elastic-carousel';






function TopSongs(){
    const [topSongs,setTopSongs] = useState([]);

    const getTopSongs = async () => {
    try {
      const res = await axios.get('/top_songs');
      setTopSongs(res.data);
      console.log(res.data);
    }catch (err) {
      console.error(err.message);
    }
    };

    useEffect(()=>{
        getTopSongs();
    },[])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 450, itemsToShow: 2 },
        { width: 700, itemsToShow: 3 },
        { width: 1000, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 },
    ]


    return(
        <>
        <div className="topSongsDiv">
            <h1>Top Songs</h1>
            <Carousel color="white" breakPoints={breakPoints} enableAutoPlay>
            {topSongs.map((song) =>{
                return <TopSong key={song.id} data={song} />
            })}
            </Carousel>
            

        </div>
        </>
    )

}
export default TopSongs;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopAlbum from './TopAlbum';
import Carousel from 'react-elastic-carousel';
import './TopAlbums.css'

function TopAlbums() {

const [topAlbums,setTopAlbums] = useState([]);

const getTopAlbums = async () => {
    try{
        const res = await axios.get('/top_albums');
        setTopAlbums(res.data);
    }catch(err){
        console.error(err.message);
    }
}

useEffect( ()=>{
    getTopAlbums();
},[]);

const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 450, itemsToShow: 2 },
        { width: 700, itemsToShow: 3 },
        { width: 1000, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 },
    ]

    return (
        <div className="topAlbumsDiv">
            <h1 style={{display:"flex", alignItems:"flex-start"}}>Top Albums</h1>
            <Carousel color="white" breakPoints={breakPoints}>
            {topAlbums.map(album =>{
                return <TopAlbum key={album.album_id} data={album}/>
            })}
            </Carousel>
        </div>
    )
}

export default TopAlbums

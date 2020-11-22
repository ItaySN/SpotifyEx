import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopAlbum from './TopAlbum';
import Carousel from 'react-elastic-carousel';
import './TopAlbums.css';
import AlbumIcon from '@material-ui/icons/Album';

function TopAlbums() {

const [topAlbums,setTopAlbums] = useState([]);

const getTopAlbums = async () => {
    try{
        const res = await axios.get('/albums/top');
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
           <h3 style={{display:"flex", alignItems:"flex-start"}}>Top Albums <AlbumIcon style={{height:"5vh",color:"rgb(206, 148, 148)"}}/></h3>
            <Carousel  color="white" breakPoints={breakPoints}>
            {topAlbums.map(album =>{
                return <TopAlbum key={album.album_id} data={album}/>
            })}
            </Carousel>
        </div>
    )
}

export default TopAlbums

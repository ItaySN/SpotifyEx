import React from 'react';
import './TopSong.css';
import {Link} from "react-router-dom";


function TopSong({data}) {
    return (
        <div>
            <img src={data.album_img}><Link></Link></img> 
            <h1>{data.title}</h1> 
        </div>
    )
}

export default TopSong;

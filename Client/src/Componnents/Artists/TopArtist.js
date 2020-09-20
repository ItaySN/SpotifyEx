import React from 'react';
import './TopArtist.css';
import {Link} from "react-router-dom";

function TopArtist({data}) {
    return (
        <div className="oneTopArtistDiv">
            <Link style={{textDecoration:"none",color:"black"}} to={`/artist/${data.id}`}><img className="imgTopArtist" src={data.artist_img}></img></Link>
            <Link style={{textDecoration:"none",color:"black"}} to={`/artist/${data.id}`}><h4>{data.artist}</h4></Link>
        </div>
    )
}

export default TopArtist

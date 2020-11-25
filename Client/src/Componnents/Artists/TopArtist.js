import React from 'react';
import './TopArtist.css';
import {Link} from "react-router-dom";

function TopArtist({data}) {
    return (
        <div className="oneTopArtistDiv">
            <Link style={{textDecoration:"none"}} to={`/artist/${data.id}`}><img className="imgTopArtist" src={data.artistImg}></img></Link>
            <Link style={{textDecoration:"none"}} to={`/artist/${data.id}`}><h4>{data.name}</h4></Link>
        </div>
    )
}

export default TopArtist

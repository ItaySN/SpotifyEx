import React from 'react';
import './TopArtist.css';

function TopArtist({data}) {
    return (
        <div className="oneTopArtistDiv">
            <img className="imgTopArtist" src={data.artist_img}></img>
            <h4>{data.artist}</h4>
        </div>
    )
}

export default TopArtist

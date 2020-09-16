import React from 'react';
import './TopSong.css';
import {Link} from "react-router-dom";


function TopSong({data}) {
    return (
        <div className="oneTopSongDiv">
            <img className="cover_imgAlbum" src={data.album_img}></img>
            <h4>{data.title}</h4>
            <p className="artistAndLength"><span>{data.artist}</span>|<span>{data.length}</span></p>
        </div>
    )
}

export default TopSong;

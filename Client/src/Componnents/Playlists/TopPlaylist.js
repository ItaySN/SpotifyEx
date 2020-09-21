import React from 'react';
import {Link} from "react-router-dom";
import './TopPlaylist.css'


function TopPlaylist({data}) {
    return (
        <div className="oneTopPlaylisDiv">
            <div topPlaylistsImg="topPlaylistsImgDiv"><Link style={{textDecoration:"none"}} to={`/playlist/${data.playlist_id}`}><img className="topPlaylistsImg" src={data.playlist_img}></img></Link></div>
            <h4><Link style={{textDecoration:"none"}} to={`/playlist/${data.playlist_id}`}>{data.playlist}</Link></h4>
            
        </div>
    )
}

export default TopPlaylist

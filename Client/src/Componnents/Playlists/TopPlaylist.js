import React from 'react';
import {Link} from "react-router-dom";


function TopPlaylist({data}) {
    return (
        <div className="oneTopPlaylisDiv">
            <div style={{height:"20vh"}}><Link style={{textDecoration:"none"}} to={`/playlist/${data.playlist_id}`}><img src={data.playlist_img}></img></Link></div>
            <h4><Link style={{textDecoration:"none"}} to={`/playlist/${data.playlist_id}`}>{data.playlist}</Link></h4>
            
        </div>
    )
}

export default TopPlaylist

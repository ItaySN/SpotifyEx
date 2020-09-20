import React from 'react';
import {Link} from "react-router-dom";

function TopPlaylist({data}) {
    return (
        <div className="oneTopPlaylisDiv">
            <h4><Link style={{textDecoration:"none",color:"black"}} to={`/playlist/${data.playlist_id}`}>{data.playlist}</Link></h4>
        </div>
    )
}

export default TopPlaylist

import React from 'react'
import './TopAlbum.css'
import {Link} from "react-router-dom";

function TopAlbum({data}) {
    return (
        <div className="oneTopAlbumDiv">
            <Link style={{textDecoration:"none"}} to={`/album/${data.album_id}`}><img className="cover_TopAlbum" src={data.album_img}></img></Link>
            <h4> <Link style={{textDecoration:"none"}} to={`/album/${data.album_id}`}>{data.album}</Link></h4>
        </div>
    )
}

export default TopAlbum

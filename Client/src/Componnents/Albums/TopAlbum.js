import React from 'react'
import './TopAlbum.css'
import {Link} from "react-router-dom";

function TopAlbum({data}) {
    return (
        <div className="oneTopAlbumDiv">
            <Link style={{textDecoration:"none"}} to={`/album/${data.albumId}`}><img className="cover_TopAlbum" src={data.albumImg}></img></Link>
            <h4> <Link style={{textDecoration:"none"}} to={`/album/${data.albumId}`}>{data.name}</Link></h4>
        </div>
    )
}

export default TopAlbum

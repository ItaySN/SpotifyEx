import React from 'react'
import './TopAlbum.css'

function TopAlbum({data}) {
    return (
        <div className="oneTopAlbumDiv">
            <img className="cover_TopAlbum" src={data.album_img}></img>
            <h4>{data.album}</h4>
        </div>
    )
}

export default TopAlbum

import React from 'react'
import './Playlist.css'
import {Link} from "react-router-dom";

function Playlist({data}) {
    return (
        <>
        <div className="allPlaylistsRow">
            <div className="containerOnePlaylist">
                {data &&
                    <div className="onePlaylist">
                        <div className="allPlaylistsImgDiv"><Link style={{textDecoration:"none",color:"black"}} to={`/playlist/${data.id}`}><img className="allPlaylistsCoverImg" src={data.playlist_img}></img></Link></div>
                        <h4 className="allPlaylistsNameP"><Link style={{textDecoration:"none",color:"black"}} to={`/playlist/${data.id}`}>{data.name}</Link> </h4>
                    </div>
                }
            </div>
        </div>
        </>
    )
}

export default Playlist

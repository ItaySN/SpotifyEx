import React from 'react';
import { IconContext } from "react-icons";
import { AiOutlineYoutube } from 'react-icons/ai';
import {Link} from "react-router-dom";
import './RecommendedSongs.css'


function RecommendedSongs({data,queryP}) {

    return (
        <>
        {data &&
        <div className="containerRecSong">
            <Link to={`/songs/${data.id}?${queryP}`} style={{textDecoration:"none"}}><img src={data.album_img} className="imgOfRecSong"></img></Link>
            <div className="titleAndArtistDiv">
                <span className="recSongTitle">{data.title}</span>
                <span className="recSongArtist">{data.artist}</span>
            </div>
            <div className="recSongLength">
                {data.length}
            </div>
            
        </div>
        }
        </>
    )
}

export default RecommendedSongs

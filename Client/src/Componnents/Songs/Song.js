import React from 'react'
import './Song.css'
import { IconContext } from "react-icons";
import { AiOutlineYoutube } from 'react-icons/ai';




export default function Song({data}){
    
    return (
        <>
        <div className="containerOneSong">
            {data &&
                <div className="oneSong">
                    <p className="allSongsTitleP">{data.title} </p>
                    <p className="allSongsArtistP"><img className="allSongsArtistImg" src={data.artist_img}></img><span className="allSongsArtistName">{data.artist}</span></p>
                    <p className="allSongsAlbumP"><img className="allSongsAlbumImg" src={data.album_img}></img><span className="allSongsAlbumName">{data.album}</span></p>
                    <IconContext.Provider value={{size:"2.5em"}}>
                    <a href={data.youtube_link} className="youtube_link" target="_blank"><AiOutlineYoutube/> </a>
                    </IconContext.Provider>
                </div>
            }
        </div>
        </>
    )
}

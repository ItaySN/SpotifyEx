import React from 'react'
import './Song.css'
import { IconContext } from "react-icons";
import { AiOutlineYoutube } from 'react-icons/ai';
import {Link} from "react-router-dom";





export default function Song({data,displayFromAllPage=true,playlistSet=false,playlist_id}){
    
    return (
        <>
        <div className="containerOneSong">
            {data &&
                displayFromAllPage ? 
                    <div className="oneSong">
                        <p className="allSongsTitleP"><Link to={`/songs/${data.id}?from_topSong=${data.id}`} style={{textDecoration:"none"}}>{data.title}</Link><span>{data.length}</span></p>
                        <p className="allSongsArtistP"><Link style={{textDecoration:"none"}} to={`/artist/${data.artist_id}`}><img className="allSongsArtistImg" src={data.artist_img}></img><span className="allSongsArtistName">{data.artist}</span></Link></p>
                        <p className="allSongsAlbumP"><Link style={{textDecoration:"none"}} to={`/album/${data.album_id}`}><img className="allSongsAlbumImg" src={data.album_img}></img><span className="allSongsAlbumName">{data.album}</span></Link></p>
                        <IconContext.Provider value={{size:"2.5em"}}>
                        <Link to={`/songs/${data.id}?from_topSong=${data.id}`} style={{textDecoration:"none"}}><AiOutlineYoutube/></Link>  
                        </IconContext.Provider>
                    </div>
                :  
                    <div>
                        {playlistSet ? 
                        <p><Link style={{textDecoration:"none"}} to={`/album/${data.album_id}`}><img className="squaringImgAlbum" src={data.album_img}></img></Link></p>
                        : 
                        <IconContext.Provider value={{size:"4.5em"}}>
                        <Link to={`/songs/${data.id}?album=${data.album_id}`} style={{textDecoration:"none"}}>
                        <AiOutlineYoutube/> 
                        </Link>
                        </IconContext.Provider>
                        
                    }
                        {playlistSet ?
                        <h4><Link to={`/songs/${data.id}?playlist=${playlist_id}`} style={{textDecoration:"none"}}>{data.title}</Link></h4>
                        :
                            <h4><Link to={`/songs/${data.id}?album=${data.album_id}`} style={{textDecoration:"none"}}>{data.title}</Link></h4>
                        }
                        {playlistSet ? 
                            <p><Link style={{textDecoration:"none"}} to={`/artist/${data.artist_id}`}>{data.artist}</Link></p>
                            : <></>
                        }
                        <p>{data.length}</p>
                        

                    </div>
               
            }
            
        </div>
        </>
    )
}

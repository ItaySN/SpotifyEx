import React from 'react';
import './TopSong.css';
import {Link} from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineYoutube } from 'react-icons/ai';



function TopSong({data,displayFromHomePage=true,type}) {
    return (
        
        <div className="oneTopSongDiv">
            {
                displayFromHomePage ?
                   <Link to={`/songs/${data.id}?from_topSong=${data.id}`} style={{textDecoration:"none"}}><img className="cover_imgAlbum" src={data.album_img}></img></Link>
                : <div className="playImgOfSongs"> <IconContext.Provider value={{size:"5em"}}> 
                    <Link to={`/songs/${data.id}?artist=${data.artist_id}`} style={{textDecoration:"none"}}><AiOutlineYoutube/></Link>
                </IconContext.Provider> </div>
                        
                        
                        
            }
            { displayFromHomePage ?
                <h4><Link to={`/songs/${data.id}?from_topSong=${data.id}`} style={{textDecoration:"none"}}>{data.title}</Link></h4>
                : <h4><Link to={`/songs/${data.id}?artist=${data.artist_id}`} style={{textDecoration:"none"}}>{data.song_name}</Link></h4>
            }
            {
                displayFromHomePage ?
                <p className="artistAndLength"><span><Link style={{textDecoration:"none"}} to={`/artist/${data.artist_id}`}>{data.artist}</Link></span>|<span>{data.length}</span></p>
                :  <p className="artistAndLength"><span>{data.length}</span></p>
            }
        </div>
        
    )
}

export default TopSong;

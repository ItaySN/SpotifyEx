import React from 'react';
import './TopSong.css';
import {Link} from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineYoutube } from 'react-icons/ai';



function TopSong({data,displayFromHomePage=true}) {
    return (
        
        <div className="oneTopSongDiv">
            {
                displayFromHomePage ?
                   <img className="cover_imgAlbum" src={data.album_img}></img>
                : <div className="playImgOfSongs"> <IconContext.Provider value={{size:"5em"}}> 
                    <Link style={{textDecoration:"none"}}><AiOutlineYoutube/></Link>
                </IconContext.Provider> </div>
                        
                        
                        
            }
            { displayFromHomePage ?
                <h4>{data.title}</h4>
                : <h4>{data.song_name}</h4>
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

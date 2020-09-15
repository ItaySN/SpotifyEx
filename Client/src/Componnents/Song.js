import React from 'react'
import './Song.css'
import { IconContext } from "react-icons";
import { AiOutlineYoutube } from 'react-icons/ai';



export default function Song({data}){
    
    return (
        <>
        <div className="containerSong">
            {data &&
                <div className="song">
                    <p className="title">{data.title} </p>
                    <p className="artistName">{data.artist} </p>
                    <p className="album">{data.album} </p>
                    <IconContext.Provider value={{size:"2.5em"}}>
                    <a href={data.youtube_link} className="youtube_link" target="_blank"><AiOutlineYoutube/> </a>
                    </IconContext.Provider>
                    {data.Num_Of_Listening && 
                    <p className="Num_Of_Listening">Num of listening : {data.Num_Of_Listening}</p>
                    }
                </div>
            }
        </div>
        </>
    )
}

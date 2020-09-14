import React from 'react'
import './Song.css'

export default function Song({data}){
    
    return (
        <>
        <div className="container">
            {data &&
            <div className="grid-container">
                <div className="song">
                    <p className="title">{data.title} </p>
                    <p className="artist">{data.artist} </p>
                    <p className="album">{data.album} </p>
                    <a href={data.youtube_link} className="youtube_link">YouTube </a>
                    {data.Num_Of_Listening && 
                    <p className="Num_Of_Listening">Num of listening : {data.Num_Of_Listening}</p>
                    }
                </div>
            </div>
            }
        </div>
        </>
    )
}

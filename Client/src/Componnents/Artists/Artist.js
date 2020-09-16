import React from 'react'
import './Artist.css'

function Artist({data}) {
    return (
       <>
        <div className="containerArtist">
            {data &&
            <div className="grid-containerArtist">
                <div className="artist">
                    {
                        data.cover_img &&
                        <img src={data.cover_img} className="cover_img"></img>
                    }
                    <p className="name">{data.artist} </p>
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

export default Artist;

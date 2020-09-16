import React from 'react'
import './Artist.css'

function Artist({data}) {
    return (
        <>
        <div className="allArtistRow">
            <div className="containerOneArtist">
                {data &&
                    <div className="oneArtist">
                        <div className="allArtistsImgDiv"><img className="allArtistsImgArtist" src={data.artist_img}></img></div>
                        <h4 className="allArtistsNameP">{data.name} </h4>
                    </div>
                }
            </div>
        </div>
        </>
    )
}

export default Artist;

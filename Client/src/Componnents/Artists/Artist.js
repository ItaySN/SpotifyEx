import React from 'react'
import { Link } from 'react-router-dom'
import './Artist.css'

function Artist({data}) {
    return (
        <>
        <div className="allArtistRow">
            <div className="containerOneArtist">
                {data &&
                    <div className="oneArtist">
                        <div className="allArtistsImgDiv"><Link style={{textDecoration:"none"}} to={`/artist/${data.id}`}><img className="allArtistsImgArtist" src={data.artist_img}></img></Link></div>
                        <h4 className="allArtistsNameP"><Link style={{textDecoration:"none"}} to={`/artist/${data.id}`}>{data.name}</Link> </h4>
                    </div>
                }
            </div>
        </div>
        </>
    )
}

export default Artist;

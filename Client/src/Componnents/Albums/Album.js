import React, { useState, useEffect } from 'react';
import './Album.css';
import { Link } from 'react-router-dom'

function Album({data,displayName=true}) {
    return (
        <>
        <div className="allAlbumsRow">
            <div className="containerOneAlbum">
                {data &&
                    displayName ?
                        <div className="oneAlbum">
                            <div className="allAlbumsImgDiv"><Link style={{textDecoration:"none"}} to={`/album/${data.id}`}><img className="allAlbumsCoverImg" src={data.albumImg}></img></Link></div>
                            <h4 className="allAlbumsNameP"><Link style={{textDecoration:"none"}} to={`/album/${data.id}`}>{data.name}</Link></h4>
                            {displayName&&
                            <p key={data.artistId} className="allAbumsArtistP"><Link style={{textDecoration:"none"}} to={`/artist/${data.artistId}`}>{data.artist.name}</Link></p>
                            }
                        </div>
                    : <div className="oneAlbumNoAllAlbums">
                            <div className="NoAllAlbumsImgDiv"><Link style={{textDecoration:"none"}} to={`/album/${data.id}`}><img className="NoallAlbumsCoverImg" src={data.albumImg}></img></Link></div>
                            <h4 className="NoAllAlbumsNameP"><Link style={{textDecoration:"none"}} to={`/album/${data.id}`}>{data.name}</Link></h4>
                        </div>
                }
            </div>
        </div>
        </>
    )
}

export default Album;

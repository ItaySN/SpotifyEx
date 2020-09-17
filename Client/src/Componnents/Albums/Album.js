import React, { useState, useEffect } from 'react';
import './Album.css';

function Album({data}) {
    return (
        <>
        <div className="allAlbumsRow">
            <div className="containerOneAlbum">
                {data &&
                    <div className="oneAlbum">
                        <div className="allAlbumsImgDiv"><img className="allAlbumsCoverImg" src={data.cover_img}></img></div>
                        <h4 className="allAlbumsNameP">{data.name}</h4>
                        <p key={data.artist_id} className="allAbumsArtistP">{data.artist}</p>
                    </div>
                }
            </div>
        </div>
        </>
    )
}

export default Album;

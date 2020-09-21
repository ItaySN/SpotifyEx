import React,{Component, useEffect,useState} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";
import Header from '../Header';
import Song from '../Songs/Song';
import Carousel from 'react-elastic-carousel';
import {Link} from "react-router-dom";
import './OneAlbumPage.css'


function OneAlbumPage() {
    const {id} = useParams();
    const [album,setAlbum] = useState();
    const [songs,setSongs] = useState([]);

    useEffect(() => {  
        (async () => {
        try{
            const {data} = await axios.get(`/albums/${id}`);
            setAlbum(data[0])
            const res = await axios.get(`/songs_ByAlbum/${id}`)
            setSongs(res.data);
            
        } catch (err) {
            console.error(err.message);
        }
    })();
    },[id])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 450, itemsToShow: 2 },
        { width: 700, itemsToShow: 3 },
    ]

    return (
        album ?
        <>
        <Header/>
        <div style={{color:"white",textAlign:"center",alignItems:"center"}}>
            <div className="OneAlbumPageArtistImgDiv">
                <Link style={{textDecoration:"none"}} to={`/album/${album.id}`}><img className="oneAlbumPageImgAlbum" src={album.cover_img}></img></Link> 
            </div>
                <h1><Link style={{textDecoration:"none"}} to={`/album/${album.id}`}>{album.name}</Link></h1>
            <p className="oneAlbumPageNameArtist"><h2 style={{textAlign:"center"}}><Link style={{textDecoration:"none"}} to={`/artist/${album.artist_id}`}>{album.artist}<span className="OneAlbumArtistImgSpan"><img className="OneAlbumArtistImg" src={album.artist_img}></img></span></Link></h2></p>
            <Carousel breakPoints={breakPoints}>
                {songs.map(song => {

                    return <Song key={song.id} data={song} displayFromAllPage={false}/>
                
                })}
            </Carousel>

        </div>
        </>
        : <div></div>
    )
}

export default OneAlbumPage;

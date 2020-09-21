import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";
import Header from '../Header';
import Song from '../Songs/Song';
import Carousel from 'react-elastic-carousel';
import {Link} from "react-router-dom";
import './OnePlaylistPage.css'

function OnePlaylistPage() {
    const {id} = useParams();
    const [playlist,setPlaylist] = useState();
    const [songs,setSongs] = useState([]);

    useEffect(() => {  
        (async () => {
        try{
            const {data} = await axios.get(`/playlists/${id}`);
            setPlaylist(data[0])
            const res = await axios.get(`/songs_ByPlaylist/${id}`)
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
        playlist ?
        <>
        <Header/>
        <div style={{color:"white"}}>
            <h1>{playlist.name}</h1>
            <div className="imgOnePlaylistPageDiv"><img className="imgOnePlaylistPage" src={playlist.playlist_img}></img></div>
            <Carousel breakPoints={breakPoints}>
                {songs.map(song => {
                return <Song key={id} data={song} displayFromAllPage={false} playlistSet={true} playlist_id={id} />
                })}
            </Carousel>

        </div>
        </>
        : <div></div>
    )
}

export default OnePlaylistPage;

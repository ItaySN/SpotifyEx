import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";
import Carousel from 'react-elastic-carousel';
import Album from '../Albums/Album';
import Header from '../Header';
import TopSong from '../Songs/TopSong';
import './OneArtistPage.css'


function OneAristPage() {
    const {id} = useParams();
    const [artist,setArtist] = useState();
    const [albums,setAlbums] = useState([]);
    const [songs,setSongs] = useState([]);

    useEffect(() => {  
        (async () => {
        try{
            const {data} = await axios.get(`/artists/${id}`);
            setArtist(data[0]);
            console.log(data)
            setSongs(data);
            const res = await axios.get(`/albums_ByArtist/${id}`)
            setAlbums(res.data);
        } catch (err) {
            console.error(err.message);
        }
    })();
    },[id])

    const breakPointsSongs = [
        { width: 1, itemsToShow: 1 },
        { width: 450, itemsToShow: 2 },
        { width: 700, itemsToShow: 3 },
    ]
       const breakPointsAlbums = [
        { width: 1, itemsToShow: 1 },
        { width: 450, itemsToShow: 2 },
    ]


    

    return (
        artist ?
            
            <div style={{color:"white"}}>
            <Header/>
            
            <div className="oneArtistPageArtistImgDiv">
                <img className="oneArtistPageArtistImg" src={artist.artist_img}></img> 
            </div>
            <h1>{artist.artist}</h1>
            <h3>Albums:</h3>
            <Carousel breakPoints={ breakPointsAlbums}>
                    {albums.map(album=>{
                        return <Album displayName={false} key={album.id} data={album}/>
                    })}
            </Carousel>
            <h3>Suggested songs:</h3>
            <Carousel breakPoints={breakPointsSongs}>

                    {songs.map(song=>{
                        return <TopSong key={song.song_id} data={{...song,song_name:song.title}} displayFromHomePage={false} />
                    })}
                    
            </Carousel>
            </div>

        : <div>
        <Header/>
         </div>
        
    )
}

export default OneAristPage

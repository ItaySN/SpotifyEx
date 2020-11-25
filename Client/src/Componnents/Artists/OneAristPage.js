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
            const data = await axios.get(`/artists/${id}`);
            setArtist(data.data)
            console.log(data)
            const data2 = await axios.get(`artists/songsByArtist/${id}`)
            setSongs(data2.data.Songs);
            const data3 = await axios.get(`artists/albumsByArtist/${id}`)
            setAlbums(data3.data.Albums);
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
        
    ]


    

    return (
        artist ?
            
            <div style={{color:"white"}}>
            <Header/>
            
            <div className="oneArtistPageArtistImgDiv">
                <img className="oneArtistPageArtistImg" src={artist.artistImg}></img> 
            </div>
            <h1>{artist.name}</h1>
            <h3 style={{textAlign:"center"}}>Albums</h3>
            <Carousel breakPoints={ breakPointsAlbums}>
                    {albums.map(album=>{
                        return <Album displayName={false} key={album.id} data={album}/>
                    })}
            </Carousel>
            <h3 style={{textAlign:"center"}}>Songs</h3>
            <Carousel breakPoints={breakPointsSongs}>
                    {songs.map(song=>{
                        return <TopSong key={song.id} data={song} displayFromHomePage={false}/>
                    })}
                    
            </Carousel>
            </div>

        : <div>
        <Header/>
         </div>
        
    )
}

export default OneAristPage

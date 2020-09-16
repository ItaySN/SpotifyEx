import React,{useState,useEffect} from 'react';
import axios from 'axios';
import TopPlaylist from './TopPlaylist';
import Carousel from 'react-elastic-carousel';


function TopPlaylists() {
    const [topPlaylists,setTopPlaylists] = useState([]);
    const [IdOfTheSongs,setIdOfTheSongs] = useState([]);
    
    const getTopPlaylists = async () =>{
        try{
            const res = await axios.get('/top_playlists');
            setTopPlaylists(res.data); 
        }catch(err){
            console.error(err.message);
        }
    }

    useEffect(() =>{
        getTopPlaylists();
    },[]);

    

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 450, itemsToShow: 2 },
        { width: 700, itemsToShow: 3 },
    ]

    return (
        <div className="topPlaylistsDiv">
            <h1 style={{display:"flex", alignItems:"flex-start"}}>Top Playlists</h1>
            <Carousel breakPoints={breakPoints}>
            {topPlaylists.map((playlist)=>{    
                return <TopPlaylist key={playlist.id} data={playlist}/>
            })}
            </Carousel>
        </div>
    )
}

export default TopPlaylists

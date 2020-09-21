import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Playlist from './Playlist';
import './Playlists.css'
import Header from '../Header';


function Playlists() {
    const [allPlaylists,setAllPlaylists] = useState([]);

    const getAllPlaylists = async () =>{
        try{
            const res = await axios.get('/playlists');
            setAllPlaylists(res.data);
        }catch(err){
            console.error(err.message);
        }
    }
    useEffect(()=>{
        getAllPlaylists();
    },[]);

    return (
    <>
        <Header color={'playlists'}/>
        <div className="allPlaylists">
            {allPlaylists.map((playlist)=>{
                return <Playlist key={playlist.id} data={playlist}/>
            })}  
        </div>
            
    </>
    )
}

export default Playlists

import React,{useState,useEffect} from 'react'
import Header from '../Header';
import axios from 'axios';
import Artist from './Artist';
import './Artists.css'

function Artists() {
    const [allArtists,setAllArtists] = useState([]);

    const getAllArtists = async () =>{
        try{
            const res = await axios.get('/artists');
            setAllArtists(res.data);
        }catch(err){
            console.error(err.message);
        }
    }
    useEffect(()=>{
        getAllArtists();
    },[]);

    return (
    <>
        <Header/>
        <div className="allArtists">
            {allArtists.map((artist)=>{
                return <Artist key={artist.id} data={artist}/>
            })}  
        </div>
            
    </>
    )
}

export default Artists;

import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../Header';
import Album from './Album';
import './Albums.css'



function Albums() {
    const [allAlbums,setAllAlbums] = useState([]);
    const getAllAlbums = async () =>{
        try{
            const res = await axios.get('/albums');
            setAllAlbums(res.data);
        }catch(err){
            console.error(err.message);
        }
    }
    useEffect(()=>{
        getAllAlbums();
    },[]);

    return (
    <>
        <Header/>
        <div className="allAlbums">
            {allAlbums.map((album)=>{
                return <Album key={album.id} data={album}/>
            })}  
        </div>
            
    </>
    )
}

export default Albums;

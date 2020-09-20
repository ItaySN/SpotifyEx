import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams,useLocation} from 'react-router-dom';
import { query } from 'express';


function useQuery() {    
    return new URLSearchParams(useLocation().search);
 }


function OneSongPage({data}) {

    const {id} = useParams();
    const [song,setSong] = useState();
    const [listSogns,setListSongs] = useState();
    const [query,setQuery] = useState();

    
    // useEffect(() => {  
    //     (async () => {
    //     try{
    //         const {data} = await axios.get(`/songs/${id}?${query}`);
    //         setSong(data[0]);
    //         console.log(data)
            
    //         const res = await axios.get(`/albums_ByArtist/${id}`)
    //         setAlbums(res.data);
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // })();
    // },[id])


    return (
        <div>
                
        </div>
    )
}

export default OneSongPage;

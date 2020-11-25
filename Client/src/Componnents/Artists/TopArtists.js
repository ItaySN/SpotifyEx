import React, { useState, useEffect } from 'react';
// import useForm from 'react-hook-forms';
import axios from 'axios';
import Artist from '../Artists/Artist.js';
// import Header from './Header.js';
import './TopArtists.css'
import TopArtist from './TopArtist.js';
import Carousel from 'react-elastic-carousel';
import { IconContext } from "react-icons";
import { GiMicrophone} from 'react-icons/gi';

function TopArtists(){
    const [topArtists,setTopArtists] = useState([]);

    const getTopArtists = async () => {
    try {
      const res = await axios.get('/artists/top');
      setTopArtists(res.data);
      console.log(res.data);
    }catch (err) {
      console.error(err.message);
    }
    };

    useEffect(()=>{
        getTopArtists();
    },[])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 450, itemsToShow: 2 },
        { width: 700, itemsToShow: 3 },
        { width: 1000, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 },
    ]
      
    return(
        <>
        
        <div className="topArtistsDiv">
            <IconContext.Provider value={{size:"1.3em",color:"rgb(206, 148, 148)"}}>
                       <h3 style={{display:"flex", alignItems:"flex-start"}}>Top Artists <GiMicrophone/> </h3>
            </IconContext.Provider>
            <Carousel color="red" breakPoints={breakPoints}>
            {topArtists.map((artist) =>{
                return <TopArtist key={artist.id} data={artist} />
            })}
            </Carousel>  

        </div>
        </>
    )

}
export default TopArtists;
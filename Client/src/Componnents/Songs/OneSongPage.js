import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams,useLocation,useHistory} from 'react-router-dom';
import YouTube from 'react-youtube';
import Song from '../Songs/Song.js';
import RecommendedSongs from './RecommendedSongs.js';
import './OneSongPage.css'
import Header from '../Header.js';

   



function OneSongPage({data}) {
    const history = useHistory();
    const queryP =  new URLSearchParams(useLocation().search);
    const {id} = useParams();
    const [song,setSong] = useState();
    const [listSogns,setListSongs] = useState();
    
    
    
    useEffect(() => {  
        (async () => {
            try{
                const {data} = await axios.get(`/songs/${id}`);
                setSong(data[0]);
                console.log(data)
                console.log(queryP.get('artist'));
            if(queryP.has('playlist')){
               const res =  await axios.get(`/songs_ByPlaylist/${queryP.get('playlist')}`)
                setListSongs(res.data)
            }
            else if(queryP.has('artist')){
                const res =  await axios.get(`/artists/${queryP.get('artist')}`)
                setListSongs(res.data)
            }
            else if(queryP.has('album')){
                const res =  await axios.get(`/songs_ByAlbum/${queryP.get('album')}`)
                setListSongs(res.data)
            }
            else if(queryP.has('from_topSong')){
                const res =  await axios.get(`/from_topSong/${queryP.get('from_topSong')}`)
                setListSongs(res.data)
            }         
        } catch (err) {
            console.error(err.message);
        }
    })();
    },[id])


    const opts = {
    height:'300',
    width:'600',
    playerVars: {
        autoplay: 1,
    },
};

const getVideosId = React.useCallback(() => {
    const link = song.youtube_link
    let id = link.slice(link.indexOf('/watch?v=') + 9);
    if (id.indexOf('&') !== -1) {
      id = id.slice(0, id.indexOf('&'));
    }
    return id;
  }, [song]);

const nextSong = React. useCallback(() =>{
    let nextIndex = 0;
    listSogns.forEach((tempsong, index) => {
      if (tempsong.id === song.id && index < listSogns.length - 1) {
        nextIndex = index + 1;
      }
    })
    if (nextIndex) {
        const nextSong = listSogns[nextIndex];
        history.push(`/songs/${nextSong.id}?${queryP}`)
        } else {
        return
        }
    })

const firstSong = React. useCallback(() =>{
    let index = 0;
    let tempObj;
    listSogns.forEach((tempSong,tempindex)=>{
        if(tempSong.id === song.id && tempindex !== 0){
            tempObj = tempSong;
            index = tempindex;
        }
    })
        if(tempObj){
            listSogns[index] = listSogns[0];
            listSogns[0] = tempObj;
        }
    })




    return (
        <>
        <Header/>
        <div className="OneSongPage">
            {song&& 
                <div className="videoPlayer">
                    <YouTube videoId={getVideosId()} onEnd={nextSong} opts={opts} />
                    <div className="oneSongDetailsTitle" > {song.title} <span style={{fontSize:"0.7em"}}>{song.length}</span> </div>
                    <div className="oneSongDetailsArtistAlbum"> {song.artist}<span>|</span><span style={{color:'white'}}>{song.album}</span></div>
                  
                    


                </div>
            }
            <div className="listOfSongs">               
               {listSogns &&
                    listSogns.map((tempSong,index)=>{
                        return (
                            <>
                            <RecommendedSongs firstSong={firstSong()} key={song.id} data={tempSong} queryP={queryP}/> 
                            {(index < listSogns.length-1) &&
                                <hr  style={{color:"white", width:"32vw",boxShadow:"0px 3px 2px 3px  rgb(44, 43, 43)" }}></hr>
                            }   
                            </>
                        )
                        
                    })
                }
            </div>
        </div>
        </>
    )
}

export default OneSongPage;

import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams,useLocation,useHistory} from 'react-router-dom';
import YouTube from 'react-youtube';
import Song from '../Songs/Song.js';


   



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
            // else if(queryP.has('top_songs')){
            //     const res =  await axios.get(`/top_songs/${queryP.get('top_songs')}`)
            //     setListSongs(res.data)
            // }         
        } catch (err) {
            console.error(err.message);
        }
    })();
    },[id])


    const opts = {
    height: '390',
    width: '640',
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



    return (
        <>
            <div className="videoPlayer">
            {song&& 
              <YouTube videoId={getVideosId()} onEnd={nextSong} opts={opts} />
            }
            </div>
            <div className="listOfSongs">               
               {listSogns &&
                    listSogns.map(song=>{
                        return <Song data={song}/>
                    })
               }
            </div>
        </>
    )
}

export default OneSongPage;

import React, { useState } from 'react';
// import useForm from 'react-hook-forms';
import axios from 'axios';
import './AddSong.css'
import Header from './Header';

function AddSongs(){

    const [newSong,setNewSong] = useState({});
    
    const updateDetails = (arg,value) => {
        setNewSong({
            ...newSong,
            [arg]: value
        })
    };
    
    const postSong = () => {
        axios.post('http://localhost:8080/song',newSong)
        .then(res => {
            console.log(res);
        })
        .catch(err=>{
            alert(err)
        })
    };

//     app.get("/songs",(req,res)=>{
//     connection.query("SELECT songs.*, albums.name As album, artists.name As artist FROM songs Join artists ON artists.id = songs.artist_id JOIN albums ON albums.id = songs.album_id ORDER BY upload_at",  (err, result, fields) =>{
//         if (err) throw err;
//         res.json(result);
//       });
// })
    

    // onChange={(e) => updateDetails('name', e.target.value)}


    return(
    <>
    <Header color={'addSong'}/>
    <div className="containerAddingSong">
            <form id="addSongForm" onSubmit={ (e) => (e.preventDefault(),
                postSong(newSong))}>
                <div className="labelsDiv">
                    <h3>Adding Song</h3>
                    <label for="addingTitle">
                        Title:
                        <input type="text" id="addingTitle" placeholder="songs's title" onChange={(e) => updateDetails('title', e.target.value)}></input>
                    </label>
                    <label for="addingArtist">
                        Artist:
                        <input id="addingArtist" placeholder="artist's ID" type="number" onChange={(e) => updateDetails('artist_id', e.target.value)}></input>
                    </label>
                    <label for="addingAlbum">
                        Album:
                        <input id="addingAlbum" type="number" placeholder="album's ID" onChange={(e) => updateDetails('album_id', e.target.value)}>
                        </input>
                    </label>
                    <label for="addingLength">
                        Length:
                        <input type="time" id="addingLength" onChange={(e) => updateDetails('length', e.target.value)}></input>
                    </label>
                    <label for="addingLink">
                        Youtube Link:
                    <input type="url" id="addingLink" onChange={(e) => updateDetails('youtube_link', e.target.value)}></input>
                    </label>
                    <label for="addingLyrics">
                        Lyrics:
                        <input type="text" id="addingLyrics" onChange={(e) => updateDetails('lyrics', e.target.value)}></input>
                    </label>
                    <label for="addingTrackNumber">
                        Track Number:
                        <input type="number" id="addingTrackNumber" onChange={(e) => updateDetails('track_number', e.target.value)}></input>
                    </label>
                    <label for="addingDate" onChange={(e) => updateDetails('created_at', e.target.value)}>
                        Created At:
                        <input type="date" id="addingDate"></input>
                    </label>
                    <input type="submit" value="Add Song!"></input>
                    <input type="reset" value="Reset"></input>
                </div>
            </form>
    </div>
    </>
    )

}
export default AddSongs;
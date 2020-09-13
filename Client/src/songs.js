import React, { useState } from 'react';
import useForm from 'react-hook-forms';
import axios from 'axioa';

function songs(props){

    const [newSong,setNewSong] = useState({
        // title: '',
        // artist: '',
        // album: '',
        // length:'',
        // link:'',
        // lyrics:'',
        // trackNumebr: '',
        // createdAt: ''
    });

    const updateDetails = (arg,value) => {
        setNewSong(
         {arg} = value   
        )
    };
    
    const postSong = (data) => {
        axios.post('localhost:3000/song')
        .then(res => {
            console.log(res);
        })
        .catch(err=>{
            alert(err)
        })
    }
    

    // onChange={(e) => updateDetails('name', e.target.value)}


    return(
    <div>
        <form id="addSongForm" onSubmit={postSong(songs)}>
            <label for="addingTitle">
                Title:
                <input type="text" id="addingTitle" placeholder="songs's title" onChange={(e) => updateDetails('title', e.target.value)}></input>
            </label>
            <label for="addingArtist">
                Artist:
                <input id="addingArtist" placeholder="artist's ID" type="number" onChange={(e) => updateDetails('artitst_id', e.target.value)}></input>
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
        </form>
    </div>
    )

}
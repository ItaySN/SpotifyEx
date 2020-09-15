import React from 'react';
import './header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Link} from "react-router-dom";
import Songs from './Songs';
import AddSongs from './AddSong';


function Header() {
    return (
        <div className="headerDiv">
            <Link style={{textDecoration:"none"}} to="/">
                <div className="link">Home Page

                </div>
            </Link>
            <Link style={{textDecoration:"none"}} to="/add_song">
                <div className="link">Add a song
                </div>
            </Link>
            <Link style={{textDecoration:"none"}} to="/all_songs">
                <div className="link">List Of Songs
                </div>            
            </Link>
            {/* <Link style={{textDecoration:"none"}} to="/top_artists">
                <div className="link">Top Artists</div>
            </Link> */}
        </div>
    )
}

export default Header;

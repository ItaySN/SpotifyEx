import React from 'react';
import './header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Link} from "react-router-dom";



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
            <Link style={{textDecoration:"none"}} to="/songs">
                <div className="link">Songs List
                </div>            
            </Link>
            <Link style={{textDecoration:"none"}} to="/artists">
                <div className="link">Artists</div>
            </Link>
        </div>
    )
}

export default Header;

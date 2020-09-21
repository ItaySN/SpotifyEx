import React from 'react';
import './header.css';
import {Link} from "react-router-dom";
import { Dropdown} from  'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

//  <QueueMusicIcon style={{height:"5vh",color:"rgb(206, 148, 148)"}}/>

const chosenLink ={
     color:'white',
     borderColor:'white',
     boxShadow:'0px 0px 3px 4px rgba(218, 209, 209, 0.75)',
}

function Header({color}) {
    return (
                     
           

            <div className="headerDiv">
            {
                (color == 'TopCharts') ? 
                <Link style={{textDecoration:"none"}} to="/">
                <div className="link" style={chosenLink}>Top Charts
                </div>
            </Link>
            :
            <Link style={{textDecoration:"none"}} to="/">
                <div className="link">Top Charts
                </div>
            </Link>
            }
            
            {
                color=='songs' ?
            <Link style={{textDecoration:"none"}} to="/songs">
                <div className="link" style={chosenLink}>Songs
                </div>            
            </Link>
            :
            <Link style={{textDecoration:"none"}} to="/songs">
                <div className="link">Songs
                </div>            
            </Link>

            }
            {
                color=='artists' ?
                <Link style={{textDecoration:"none"}} to="/artists">
                    <div className="link" style={chosenLink}>Artists</div>
                </Link>
                :
                <Link style={{textDecoration:"none"}} to="/artists">
                    <div className="link">Artists</div>
                </Link>

            }
            {
                color=='albums' ?
                <Link style={{textDecoration:"none"}} to="/albums">
                    <div className="link" style={chosenLink}>Albums</div>
                </Link>
                :
                <Link style={{textDecoration:"none"}} to="/albums">
                    <div className="link">Albums</div>
                </Link>

            }
            {
                color=='playlists' ?
                <Link style={{textDecoration:"none"}} to="/playlists">
                    <div className="link" style={chosenLink}>Playlists</div>
                </Link>
                :
                <Link style={{textDecoration:"none"}} to="/playlists">
                    <div className="link">Playlists</div>
                </Link>
            }
            {
                color=='addSong' ?
                <Link style={{textDecoration:"none"}} to="/add_song">
                    <div className="link" style={chosenLink}>Add a song
                    </div>
                </Link>
                :
                <Link style={{textDecoration:"none"}} to="/add_song">
                    <div className="link" >Add song
                    </div>
                </Link>
                
            }

            
        </div>

    )
}

export default Header;

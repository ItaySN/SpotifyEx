import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import AddSongs from './Componnents/AddSong';
import Songs from './Componnents/Songs/Songs';
import Artists from './Componnents/Artists/Artists';
import Albums from './Componnents/Albums/Albums';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/add_song">
          <AddSongs/>
        </Route>
        <Route path="/songs">
          <Songs/>
        </Route>
        <Route path="/artists">
          <Artists/>
        </Route>
        <Route path="/albums">
          <Albums/>
        </Route>
        <Route path="/">
          <App/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

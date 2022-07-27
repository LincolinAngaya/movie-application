import React from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter,Switch} from 'react-router-dom';

import NavBar from "./components/Navigation/NavBar";



import AllMovies from './components/Pages/AllMovies';
import FavoriteMovies from './components/Pages/FavoriteMovies';
import NewMovies from './components/Pages/NewMovies';
import './index.css'

function App() {
  return (
    
    <div className='wrapper'>
    <NavBar />
    <AllMovies />
    
    <Switch>
    <Route  exact path="/">
      <AllMovies />
    </Route>
    <Route path="/favorites">
      <FavoriteMovies />
    </Route>
    <Route path="/new-movies">
      <NewMovies/>
    </Route>
    </Switch>
   </div>
    
  );
}

export default App;

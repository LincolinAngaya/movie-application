import React from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import AllMovies from './components/Pages/AllMovies';
import FavoriteMovies from './components/Pages/FavoriteMovies';
import NewMovies from './components/Pages/NewMovies';
import './layout.css'

import Layout from "./components/layout/Layout";
function App() {
  return (
    
    <div className='wrapper'>
    <Layout/>
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

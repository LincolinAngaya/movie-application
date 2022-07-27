import {Route} from 'react-router-dom'
import AllMovies from './components/Pages/AllMovies';
import FavoriteMovies from './components/Pages/FavoriteMovies';
import NewMovies from './components/Pages/NewMovies';
function App() {
  return (
    <div>
     <Route path='/' >
      <AllMovies />
     </Route>
     <Route path='/new-movies' >
      <NewMovies />
     </Route>
     <Route path='/favorites' >
      <FavoriteMovies/>
     </Route>
    </div>
  );
}

export default App;

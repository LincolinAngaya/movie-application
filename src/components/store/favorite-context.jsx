import { createContext,useState } from "react";

const FavoriteContext = createContext({
    favorites:[],
    totalFavorites: 0,
    addFavorite:(favoriteMovie) => {},
    removeFavorite:(movieId) => {},
    itemIsFavorite:(movieId) =>{}
});
 export function FavoriteContextProvider(props){
    const [userFavorites, setUserFavorite] = useState([]);


    function addFavoriteHandler(favoriteMovie){
        setUserFavorite((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMovie)
        });
    }

    function removeFavoriteHandler(movieId){
        setUserFavorite((prevUserFavorites) => {
            return prevUserFavorites.filter(movie => movie.id !== movieId)
        })
    }
    function itemIsFavoriteHandler(movieId){
        return  userFavorites.some(movie => movie.Id === movieId)
    }
const context ={
       favorites:userFavorites,
       totalFavorites: userFavorites.length,
      addFavorite: addFavoriteHandler,
      removeFavorite:removeFavoriteHandler,
     itemIsFavorite: itemIsFavoriteHandler
};
;

    return <FavoriteContext.Provider value={context}>
          {props.children}

        </FavoriteContext.Provider>
}
export default FavoriteContext;
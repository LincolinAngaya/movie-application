import { createContext,useState } from "react";

const FavoriteContext = createContext({
    favorites:[],
    totalFavorites: 0
});
function FavoriteContextProvider(props){
    const [useFavorites, setUserFavorite] = useState([]);

const context ={
      
};
;

    return <FavoriteContext.Provider value={context}>
          {props.children}

        </FavoriteContext.Provider>
}
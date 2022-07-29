import { createContext } from "react";

const FavoriteContext = createContext({
    favorites:[],
    totalFavorites: 0
});
function FavoriteContextProvider(props){
    return <FavoriteContext.Provider>
          {props.children}

    </FavoriteContext.Provider>
}
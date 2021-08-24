import React, { useState, useEffect, createContext } from "react";
import { getGenres } from "C:/Users/Evan/Desktop/Web App/Repeat Labwork/wad-api-labs-2021/reactApp/src/api/movie-api.js";

export const GenresContext = createContext(null)

const GenresContextProvider = props => {
    const [genres, setGenres] = useState([{ id: "0", name: "All" }]);
    useEffect(() => {
      getGenres().then(allGenres => {
        setGenres([genres[0], ...allGenres]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <GenresContext.Provider
          value={{
            genres
          }}
        >
          {props.children}
        </GenresContext.Provider>    
    )
}

export default GenresContextProvider;
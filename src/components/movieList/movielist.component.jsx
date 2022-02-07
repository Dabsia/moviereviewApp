import React from  'react';
import Movie from '../movie/movie.component';


const MovieList = ({results}) => {
// This movieList component loops through the result props and creates a movie card
    return(
        <main className="div">
            {results.map((result,id) => (
                <Movie result = {result} key={id}/>
            ))}
        </main>
    )
}


export default MovieList
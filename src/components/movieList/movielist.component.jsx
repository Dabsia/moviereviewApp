import React from  'react';
import Movie from '../movie/movie.component';


const MovieList = ({results}) => {

    return(
        <main className="div">
            {results.map((result,id) => (
                <Movie result = {result} key={id}/>
            ))}
        </main>
    )
}


export default MovieList
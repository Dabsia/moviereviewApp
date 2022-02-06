import React from 'react';
// import './movie.styles.css'




const Movie = ({result}) => {
    
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
    function getClassByRate(vote){
        if (vote >= 8){
            return 'green'
        }
        else if (vote >= 5 ){
            return 'orange'
        }
        else{
            return 'red'
        }
    }
    
    return(
        
            <div className="movie">
                <img src={IMG_PATH + result.poster_path} alt={result.title} />
                <div className="movie-info">
                    <h3>{result.title}</h3>
                    <span className={getClassByRate(result.vote_average)}>{result.vote_average}</span>
                </div>
                <div className="overview">
                    <h3>Overview</h3>
                    <p>{result.overview}</p>
                </div>
        </div>
        
    )
}


export default Movie
import { useState } from 'react'
import { nanoid } from 'nanoid'
import '../index.css'

export default function MovieCards(props) {

                // key={nanoid()}
                // id={movie.id}
                // title={movie.title}
                // overview={movie.overview}
                // popularity={movie.popularity}
                // vote_average={movie.vote_average}
                // vote_count={movie.vote_count}
                // release_date={movie.release_date}

    const movieMap = props.movies.map(movie => {
        return (
            <div className="movieCard" key={nanoid()}>
                <h1>{movie.title}</h1>
                <h3>Popularity: {movie.popularity}</h3>
                <h4>Rating: {Math.round((movie.vote_average + Number.EPSILON)*100)/100}</h4>
            </div>
        )
    })
    
    return movieMap
}
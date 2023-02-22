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

    function roundTwoDecimals(num) {
        return Math.round((num + Number.EPSILON)*100)/100
    }

    const movieMap = props.movies.map(movie => {
        return (
            <div className="movieCard" key={nanoid()}>
                <h1>{movie.title}</h1>
                <h3>Popularity: {roundTwoDecimals(movie.popularity)}</h3>
                <h4>Rating: {roundTwoDecimals(movie.vote_average)}</h4>
            </div>
        )
    })
    
    return movieMap
}
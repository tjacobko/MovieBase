import { useState } from 'react'
import { nanoid } from 'nanoid'
import '../index.css'

export default function MovieCards(props) {
    function roundTwoDecimals(num) {
        return Math.round((num + Number.EPSILON)*100)/100
    }

    const base_url = props.config.base_url
    const size = props.config.backdrop_sizes[0]
    const movieMap = props.movies.map(movie => {
        return (
            <div className="movieCard" key={nanoid()}>
                <img src={`${base_url + size + movie.backdrop_path}`} />
                <h1>{movie.title}</h1>
                <h3>Popularity: {roundTwoDecimals(movie.popularity)}</h3>
                <h4>Rating: {roundTwoDecimals(movie.vote_average)}</h4>
            </div>
        )
    })
    
    return (
        <div className="block">
            <h2 className="block-title">Top Movies Today</h2>
            <div className="block-list">
                {movieMap}
            </div>
        </div>
    )
}
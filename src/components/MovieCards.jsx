import { useState } from 'react'
import { nanoid } from 'nanoid'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import '../index.css'
import 'react-circular-progressbar/dist/styles.css'

export default function MovieCards(props) {
    function roundTwoDecimals(num) {
        return Math.round((num + Number.EPSILON)*100)/100
    }

    function percentage(num) {
        return Math.round(Math.round((num + Number.EPSILON)*100)/10)
    }

    const base_url = props.config.base_url
    const size = props.config.backdrop_sizes[0]
    const movieMap = props.movies.map(movie => {
        return (
            <div className="movieCard" key={nanoid()}>
                <img className="movieCard-img" src={`${base_url + size + movie.backdrop_path}`} />
                <div className="movieCard-rating">
                    <CircularProgressbar
                        strokeWidth={12}
                        styles={buildStyles({textSize: "22px"})}
                        value={percentage(movie.vote_average)}
                        text={`${percentage(movie.vote_average)}%`}
                    />
                </div>
                <h1 className="movieCard-title">{movie.title}</h1>
                <h3 className="movieCard-popularity">Popularity: {roundTwoDecimals(movie.popularity)}</h3>
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
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
                <div className="info-grid">    
                    <div className="movieCard-rating">
                        <CircularProgressbar
                            strokeWidth={12}
                            styles={buildStyles({textSize: "22px"})}
                            value={percentage(movie.vote_average)}
                            text={`${percentage(movie.vote_average)}%`}
                        />
                    </div>
                    <div className="movieCard-title">
                        <p className="movieCard-info-text">{movie.title}</p>
                    </div>
                    <div className="movieCard-info">
                        <p className="movieCard-info-text">
                            <span className="movieCard-info-text-bold">Release Date: </span>
                            {movie.release_date}
                        </p>
                        <p className="movieCard-info-text">
                            <span className="movieCard-info-text-bold">Popularity: </span>
                            {roundTwoDecimals(movie.popularity)}
                        </p>
                    </div>
                </div>
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
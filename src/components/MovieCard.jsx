import { useState } from 'react'
// import nanoid from 'nanoid'

export default function MovieCard(props) {

                // key={nanoid()}
                // id={movie.id}
                // title={movie.title}
                // overview={movie.overview}
                // popularity={movie.popularity}
                // vote_average={movie.vote_average}
                // vote_count={movie.vote_count}
                // release_date={movie.release_date}

    const movieMap = props.movies.map(movie => {
        return <h1>{movie.title}</h1>
    })
    
    return (
        <h1>{movieMap}</h1>
    )
}
import { useState, useEffect } from 'react'
import MovieCards from './components/MovieCards'

function App() {
  const [movieData, setMovieData] = useState()
  
  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY

    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
      .then(res => res.json())
      .then(data => setMovieData(data.results))
  }, [])
  
  movieData && console.log(movieData)

  return (
    <div>
      {movieData && <MovieCards movies={movieData} />}
    </div>
  )
}

export default App

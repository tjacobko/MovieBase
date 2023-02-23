import { useState, useEffect } from 'react'
import Header from './components/Header'
import MovieCards from './components/MovieCards'

function App() {
  const [movieData, setMovieData] = useState()
  const [config, setConfig] = useState()
  
  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
      .then(res => res.json())
      .then(data => setMovieData(data.results))
  }, [])

  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY
    fetch(`https://api.themoviedb.org/3/configuration?api_key=${key}`)
      .then(res => res.json())
      .then(data => setConfig(data.images))
  }, [])
  
  movieData && console.log(movieData)
  config && console.log(config)

  return (
    <div>
      <Header />
      {
        movieData
        && config
        && <MovieCards movies={movieData} config={config}/>
      }
    </div>
  )
}

export default App

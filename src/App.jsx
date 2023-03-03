import { useState, useEffect } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  const [movieData, setMovieData] = useState()
  const [showData, setShowData] = useState()
  const [personData, setPersonData] = useState()
  const [config, setConfig] = useState()
  
  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY

    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
      .then(res => res.json())
      .then(data => setMovieData(data.results))

    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`)
      .then(res => res.json())
      .then(data => setShowData(data.results))

    fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${key}`)
      .then(res => res.json())
      .then(data => setPersonData(data.results))

    fetch(`https://api.themoviedb.org/3/configuration?api_key=${key}`)
      .then(res => res.json())
      .then(data => setConfig(data.images))
  }, [])

  return (
    <div>
      <Header />
        {
          movieData
          && config
          && <Cards data={movieData} config={config} />
        }
        {
          showData
          && config
          && <Cards data={showData} config={config} />
        }
        {
          personData
          && config
          && <Cards data={personData} config={config} />
        }
      <Footer />
    </div>
  )
}

export default App

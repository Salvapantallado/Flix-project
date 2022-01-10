import { useEffect, useState } from 'react';
import './App.css';
import { getMovies, getTrending } from './api/api';
import Home from './pages/home';


function App() {
  const [defaultMovie, setDefaultMovie] = useState([])
  const [popularMovies, setPopularMovies] = useState([])

  // Asigning api calls to states
  const getAllMovies = async() => {
    try{
      const data = await getMovies()
      const data2 = await getTrending()
      setDefaultMovie(data.results.slice(0, 1))      
      setPopularMovies(data2.results.slice(1, 5))
    } catch(err) {
      console.log(err);
    }
  }


  
  useEffect(() => {
    getAllMovies()
  }, [])

  return (
    <div className="App">
      <Home 
      defaultMovie={defaultMovie}
      popularMovies={popularMovies}
      />
    </div>
  );
}

export default App;

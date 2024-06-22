// ae980f94

import {useState, useEffect} from 'react'
import Axios from 'axios'
import "./App.css"

const Movie = () => {
  const [movie,setMovie]=useState("")
  
  const fetchData = async () =>{
    const response = await Axios.get("https://api.themoviedb.org/3/discover/movie", {
    headers: {
      accept: 'application/json',
       Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmU0ODMxNTU4NTNmYWRiZjliYzRiYWIwODRlYmVjOCIsInN1YiI6IjY2NzQwMzg1NzQ2OWQ1Nzg2OGZjNWM4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6QQV7Edh18IFw284WwXv8kpkhqHtlyqFcp8zIyrFaE`
    }}
    )
    console.log(response.data.results[1])
    setMovie(response.data.results[1])
  }
  useEffect(()=>{
    fetchData()
  }, [])
  
  return (
    <div>
    {movie &&
          <div key="i">
   <img src={`https://image.tmdb.org/t/p/w500 ${movie.poster_path}`} />
          <p>{movie.title}</p>
          <p>{movie.overview}</p>
          <p>{movie.popularity}</p>
          <p>{movie.release_date}</p>
          <p>{movie.vote_average}</p>
          </div>
    }
    </div>
  )
}

export default Movie
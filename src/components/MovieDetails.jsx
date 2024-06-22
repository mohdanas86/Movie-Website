import {useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import Axios from "axios"

const MovieDetails = () => {
  const { id } = useParams();
  const [ movieDetails, setMovieDetails ] = useState("")
  
  console.log(id)
  const fetchDetails = async() =>{
    try{
   const url = `http://www.omdbapi.com/?apikey=ae980f94&i=${id}`;
   const response = await Axios.get(url)
   console.log(response.data)
   setMovieDetails(response.data)
    }catch(err){
      console.log("Error", err)
    }
  }
  
  useEffect(()=>{
    fetchDetails()
  }, [])
  return (
    <>
     <div className="w-full md:w-[80%] mx-auto py-3 px-4 md:px-0 flex justify-start items-start gap-4 flex-col relative pt-[4rem]">
    <h2 className="font-semibold absolute top-4 left-4 md:left-0">
    {movieDetails.Released}
    </h2>
    <h2 className="font-semibold text-blue-400 absolute top-8 right-4
    ">#
    {movieDetails.Type}
    </h2>
    <p className="text-sm font-light">
    {movieDetails.Plot}
    </p>
    </div>
    
    <div className="w-full md:w-[80%] mx-auto py-3 px-4 md:px-0 flex justify-start items-start gap-4 flex-col mb-12">

    <div className="w-[50%] md:w-[50%] mx-auto flex justify-center items-center gap-4 flex-col my-4">
    <img src={movieDetails.Poster} />
    </div>
    <div className="w-full flex justify-start items-start gap-3  flex-col">
    <h2 className="font-semibold text-2xl capitalize my-5">{movieDetails.Title}</h2>

<div className="grid grid-cols-1 w-full mx-auto">
<ul className="flex flex-col w-full gap-2">
<li className="py-2 px-4 text-lg font-semibold border-b border-slate-400 shadow shadow-[#ffffff40]">
<span className="text-blue-400">#</span>
<span className=" text-blue-400 mr-3 ml-2">Ratings</span>
{movieDetails.imdbRating}
</li>
<li className="py-2 px-4 text-lg font-semibold flex justify-start items-start border-b border-slate-400 shadow shadow-[#ffffff40]">
<span className="text-blue-400">#</span>
<span className=" text-blue-400 mr-3 ml-2">Actor</span>
{movieDetails.Actors}
</li>
<li className="py-2 px-4 text-lg font-semibold flex justify-start items-start border-b border-slate-400 shadow shadow-[#ffffff40]">
<span className="text-blue-400">#</span>
<span className=" text-blue-400 mr-3 ml-2">Director</span>
{movieDetails.Director}
</li>
<li className="py-2 px-4 text-lg font-semibold flex justify-start items-start border-b border-slate-400 shadow shadow-[#ffffff40]">
<span className="text-blue-400">#</span>
<span className=" text-blue-400 mr-3 ml-2">Writer</span>
{movieDetails.Writer}
</li>
<li className="py-2 px-4 text-lg font-semibold flex justify-start items-start border-b border-slate-400 shadow shadow-[#ffffff40]">
<span className="text-blue-400">#</span>
<span className=" text-blue-400 mr-3 ml-2">Award</span>
{movieDetails.Awards}
</li>
<li className="py-2 px-4 text-lg font-semibold flex justify-start items-start border-b border-slate-400 shadow shadow-[#ffffff40]">
<span className="text-blue-400">#</span>
<span className=" text-blue-400 mr-3 ml-2">Genre</span>
{movieDetails.Genre}
</li>
<li className="py-2 px-4 text-lg font-semibold flex justify-start items-start border-b border-slate-400 shadow shadow-[#ffffff40]">
<span className="text-blue-400">#</span>
<span className=" text-blue-400 mr-3 ml-2">Country</span>
{movieDetails.Country}
</li>
<li className="py-2 px-4 text-lg font-semibold flex justify-start items-start border-b border-slate-400 shadow shadow-[#ffffff40]">
<span className="text-blue-400">#</span>
<span className=" text-blue-400 mr-3 ml-2">Language</span>
{movieDetails.Language}
</li>

<li className="py-2 px-4 text-lg font-semibold flex justify-start items-start border-b border-slate-400 shadow shadow-[#ffffff40]">
<span className="text-blue-400">#</span>
<span className=" text-blue-400 mr-3 ml-2">Released</span>
{movieDetails.Released}
</li>

<li className="py-2 px-4 text-lg font-semibold flex justify-start items-start border-b border-slate-400 shadow shadow-[#ffffff40]">
<span className="text-blue-400">#</span>
<span className=" text-blue-400 mr-3 ml-2">Rated</span>
{movieDetails.Rated}
</li>

<li className="py-2 px-4 text-lg font-semibold flex justify-start items-start border-b border-slate-400 shadow shadow-[#ffffff40]">
<span className="text-blue-400">#</span>
<span className=" text-blue-400 mr-3 ml-2">Type</span>
{movieDetails.Type}
</li>

<li className="py-2 px-4 text-lg font-semibold flex justify-start items-start border-b border-slate-400 shadow shadow-[#ffffff40]">
<span className="text-blue-400">#</span>
<span className="text-blue-400 mr-3 ml-2">Imdb Votes</span>
{movieDetails.imdbVotes}
</li>

<li className="py-2 px-4 text-lg font-semibold flex justify-start items-start border-b border-slate-400 shadow shadow-[#ffffff40]">
<span className="text-blue-400">#</span>
<span className="text-blue-400 mr-3 ml-2">Total Seasons</span>
{movieDetails.totalSeasons}
</li>

<li className="py-2 px-4 text-lg font-semibold flex justify-start items-start border-b border-slate-400 shadow shadow-[#ffffff40]">
<span className="text-blue-400">#</span>
<span className="text-blue-400 mr-3 ml-2">Plot</span>
{movieDetails.Plot}
</li>

</ul>
  </div>
        </div>
    </div>
    </>
  )
}

export default MovieDetails

{/*
    <img src={movieDetails.Poster} />
    <p>{movieDetails.imdbRating}</p>
    <p>{movieDetails.Actors}</p>
    <p>{movieDetails.Director}</p>
    <p>{movieDetails.Writer}</p>
    <p>{movieDetails.Awards}</p>
    <p>{movieDetails.Genre}</p>
    <p>{movieDetails.Country}</p>
    <p>{movieDetails.Language}</p>
    <p>{movieDetails.Released}</p>
    <p>{movieDetails.Plot}</p>
    <p>{movieDetails.Rated}</p>
    <p>{movieDetails.Type}</p>
    <p>{movieDetails.imdbVotes}</p>
    <p>{movieDetails.totalSeasons}</p>
*/}
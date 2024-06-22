import { useState, useEffect,useContext} from 'react';
import Axios from 'axios';
import Header from './Header.jsx';
import "../App.css";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

import {MovieContext} from "../Context/MovieContext.jsx"

const SearchMovies = () => {
  const [moreItems, setMoreItem] = useState(6);
  const [movieId, setMovieId] = useState("");
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(1);
  const [value, setValue] = useState('Hollywood'); // Default value to "Hollywood"

const {category, setCategory} = useContext(MovieContext);

  const nextPage = () => {
    setCount(count + 1);
  }

  const handleSubmit = () => {
    setCategory(search);
  }
console.log(category)
  // FETCHING MOVIES DATA
  const fetchData = async () => {
    try {
     // const url = `http://www.omdbapi.com/?apikey=ae980f94&s=${value}&page=${count}`;
      const url = `http://www.omdbapi.com/?apikey=ae980f94&s=${category}&page=${count}`;
      const response = await Axios.get(url);
      if (!response.data.Response === "true") {
        setCount(count);
        console.log("error not found data", response.data);
      } else {
        console.log(response.data.Search);
        if(response.data.Search){
        setMovies(response.data.Search);
        }else{
        setCategory("Hollywood");
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [value, count, category]); // Add value to dependency array

  const showMoreItems = () => {
    setMoreItem(moreItems + 6);
  }

  return (
    <>
      <div className="w-full">
        <div className="w-full md:w-[80%] mx-auto py-4 px-4 md:px-0 flex justify-between items-center gap-4 md:flex-row flex-col">
          <h2 className="text-2xl font-semibold mt-5 pb-2 border-b-[1.5px] border-[#4681f4] capitalize">{category} movies</h2>

          <div className="flex justify-center gap-0">
            <input
              type="text"
              placeholder="Search for movie or tv show"
              onChange={(e) => setSearch(e.target.value)}
              className="py-1 px-4 border-[1.5px] border-0 rounded-l-2xl bg-gray-200 text-black outline-0"
            />
            <button className="py-1.5 px-4 bg-gray-200 text-black rounded-r-2xl text-xl" onClick={handleSubmit}><AiOutlineSearch /></button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[80%] mx-auto py-5 px-4 md:px-0 grid grid-cols-2 md:grid-cols-3 gap-4">
        {movies.slice(0, moreItems).map((movie, index) => (
          <a href={`/movie/${movieId}`} key={index}>
            <div className="flex flex-col justify-start items-start relative text-white duration-300 anasAnim" onClick={() => setMovieId(movie.imdbID)}>
              <div className="absolute top-2 left-2 bg-red-600 text-white px-2 rounded-3xl text-sm">
                {movie.Type}
              </div>
              <div className="w-full flex justify-center items-center h-[230px] md:h-[330px] overflow-hidden rounded-t-lg">
                <img src={movie.Poster} className="w-full" alt={movie.Title} />
              </div>
              <div className="flex justify-center items-start flex-col p-2 md:p-4">
                <p>{movie.Title.length > 10 ? movie.Title.substr(0, 35) + "..." : movie.Title}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="w-full md:w-[80%] mx-auto py-3 px-4 md:px-0 flex justify-between items-center gap-4">
        <button className="border w-1/2 md:w-1/3 py-2 px-6 rounded-2xl shadow-lg bg-[#4681f4] m-auto text-white flex justify-center items-center gap-4 capitalize border-0" onClick={showMoreItems}>show more <MdKeyboardDoubleArrowDown /></button>
        <button className="border w-1/2 md:w-1/3 py-2 px-6 rounded-2xl shadow-lg bg-[#4681f4] m-auto text-white flex justify-center items-center gap-4 capitalize border-0" onClick={nextPage}>next page</button>
      </div>
    </>
  );
};

export default SearchMovies;
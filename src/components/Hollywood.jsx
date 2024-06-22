import { useState, useEffect,useRef} from 'react';
import Axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {SliderSetting} from "../assets/SliderSetting.jsx"

import { FaArrowRightLong,FaArrowLeftLong} from "react-icons/fa6";

const Hollywood = () => {
  const swiperRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");

  // FETCHING MOVIES DATA
  const fetchData = async () => {
    try {
      const url = `http://www.omdbapi.com/?apikey=ae980f94&s=cartoon`;
      const response = await Axios.get(url);
      console.log(response.data.Search);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Add value to dependency array

const leftScroll =()=>{
  if(swiperRef.current && swiperRef.current.swiper){
    swiperRef.current.swiper.slidePrev()
  }
}
const rightScroll =()=>{
  if(swiperRef.current && swiperRef.current.swiper){
    swiperRef.current.swiper.slideNext()
  }
}
// console.log(movieId)
  return (
    <>
        <div className="w-full md:w-[80%] mx-auto py-3 px-4 md:px-0 flex justify-between items-center mt-4">
         <h2 className=" text-2xl font-semibold pb-2 border-b-[1.5px] border-[#4681f4]">Kids</h2>
         
        <div className="flex justify-center items-center gap-3">
        <span className="flex justify-center items-center w-[30px] h-[30px] bg-white text-black rounded-[50%] text-lg" onClick={leftScroll}><FaArrowLeftLong /></span>
        <span className="flex justify-center items-center w-[30px] h-[30px] bg-white text-black rounded-[50%] text-lg" onClick={rightScroll}><FaArrowRightLong /></span>
        </div>
        
        </div>
        
    <div className="w-full md:w-[80%] mx-auto py-3 px-4 md:px-0 flex justify-start items-center gap-4 ">
    
      <Swiper {...SliderSetting} ref={swiperRef}>
        {movies.map((movie, index) => (
   <SwiperSlide key={index} onClick={()=>setMovieId(movie.imdbID)}>
            <a href={`/movie/${movieId}`}>
            <div className="anasAnim w-[175px] md:w-[250px] flex flex-col justify-start items-star relative text-white mt-2">
              <div className="absolute top-2 left-2 bg-green-600 text-white px-2 rounded-3xl text-sm">
                {movie.Type}
              </div>
              <div className="w-full flex justify-center items-center h-[250px] md:h-[350px] overflow-hidden rounded-t-lg">
                <img src={movie.Poster} className="w-full" alt={movie.Title} />
              </div>
              <div className="flex justify-center items-start flex-col p-2 md:p-4">
                <p>{movie.Title.length > 10 ? movie.Title.substr(0, 35) + "..." : movie.Title}</p>
              </div>
            </div>
          </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
}

export default Hollywood;
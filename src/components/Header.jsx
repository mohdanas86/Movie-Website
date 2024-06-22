import { useState,useContext} from 'react';

import { GiHamburgerMenu } from "react-icons/gi"

import {MovieContext} from "../Context/MovieContext.jsx"

const Header = () => {
  const {category, setCategory} = useContext(MovieContext);
  
  const data =()=>[
    {
      name: "South",
      url: "/",
    },
    {
      name: "Crime",
      url: "/",
    },
    {
      name: "Horror",
      url: "/",
    },
    {
      name: "Thriller",
      url: "/",
    },
    {
      name: "Hollywood",
      url: "/",
    },
    {
      name: "Bollywood",
      url: "/",
    },
  ]
  
  const [list,setList]=useState(data)
  const [show,setShow]=useState(false)
  
  const toggleMenu =()=>{
    setShow(e=>!e)
  }
  
  const catogeryClick=(data)=>{
    setCategory(data)
    setShow(false)
  }
   console.log(category)
  
  return (
    <>
   <div className="w-full shadow-lg relative bg-[#181B20]">
   <div className="w-full md:w-[80%] mx-auto py-4 px-4 md:px-0 flex justify-between items-center gap-4">
   <div className="flex justify-center items-center">
   <a href="/" className="text-2xl font-semibold">Stomilar</a>
   </div>
   
     <button className="text-white border py-2 px-3 rounded-lg anasAnim" onClick={(e)=>setShow(e=>!e)}><GiHamburgerMenu /></button>
    </div>
    </div>
    

    <div className={`z-10 w-full h-full bg-[rgba(0,0,0,0.500)] fixed top-0 overflow-hidden ${!show? "hidden":"blick"}`} onClick={(e)=>setShow(e=>!e)}>
    <div className="w-[60%] md:w-[33.3%] h-full bg-white flex flex-col justify-start items-start text-black py-4 px-4 gap-4" onClick={(e)=>e.stopPropagation()}>
     
     <div className="flex justify-center items-center">
   <a href="/" className="text-2xl font-semibold mt-4">Stomilar</a>
   </div>
   
   
   <div className="flex justify-center items-start flex-col w-full gap-2">
   {list && 
   list.map((v,i)=>{
     return(
      <span className="text-lg font-semibold text-slate-600" key={i} onClick={()=>catogeryClick(v.name)}><span className="text-blue-600">#</span> {v.name}</span>
       )
   })}
   </div>
   
    </div>
    </div>
    </>
  )
}

export default Header
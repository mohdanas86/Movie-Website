import { useState, useContext } from 'react';
import useBodyScrollLock from "../Hooks/useBodyScrollLock.jsx";
import { GiHamburgerMenu } from "react-icons/gi";

import { MovieContext } from "../Context/MovieContext.jsx";

const Header = () => {
  const { isLocked, toggle } = useBodyScrollLock();
  const { category, setCategory, isLoggedin, user } = useContext(MovieContext);
  
  const data = () => [
    { name: "South", url: "/" },
    { name: "Crime", url: "/" },
    { name: "Horror", url: "/" },
    { name: "Thriller", url: "/" },
    { name: "Hollywood", url: "/" },
    { name: "Bollywood", url: "/" },
  ];
  
  const [list, setList] = useState(data);
  const [show, setShow] = useState(false);
  const [logout, setLogout] = useState(false);
  
  const toggleMenu = () => {
    setShow(e => !e);
    toggle();  // Toggle the body scroll lock state
  };
  
  const categoryClick = (data) => {
    setCategory(data);
    setShow(false);
    toggle();  // Ensure body scroll is unlocked when menu is closed
  };

  return (
    <>
      <div className="w-full shadow-lg relative bg-[#181B20]">
        <div className="w-full md:w-[80%] mx-auto py-4 px-4 md:px-0 flex justify-between items-center gap-4 relative">
          <div className="flex justify-center items-center">
            <a href="/" className="text-2xl font-semibold">Stomilar</a>
          </div>
          <button 
            className="text-white border py-2 px-3 rounded-lg anasAnim" 
            onClick={toggleMenu}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      
      <div className={`z-10 w-full h-full bg-[rgba(0,0,0,0.500)] fixed top-0 overflow-hidden ${!show ? "hidden" : "block"}`} onClick={toggleMenu}>
        <div className="w-[60%] md:w-[33.3%] h-full bg-white flex flex-col justify-start items-start text-black py-4 px-4 gap-4 relative" onClick={(e) => e.stopPropagation()}>
          <div className="w-full flex justify-between items-center">
            <a href="/" className="text-2xl font-semibold">Stomilar</a>
          </div>
          <div className="flex justify-center items-start flex-col w-full gap-2">
            {list.map((v, i) => (
              <span 
                className="text-lg font-semibold text-slate-600" 
                key={i} 
                onClick={() => categoryClick(v.name)}
              >
                <span className="text-blue-600">#</span> {v.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


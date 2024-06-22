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
    </>
  );
}


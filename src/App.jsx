import { useState, useEffect } from 'react';
import Axios from 'axios';


import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SearchMovies from './components/SearchMovies.jsx'
import Hollywood from './components/Hollywood.jsx'
import Bollywood from './components/Bollywood.jsx'
import "./App.css";

const App = () => {
return(
  <>
  <SearchMovies />
  <Hollywood />
  <Bollywood />
  </>
  )
};

export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import {MovieProvider} from "./Context/MovieContext.jsx"
import MovieDetails from './components/MovieDetails';
import './index.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <MovieProvider>
    <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);

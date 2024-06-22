import { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [category, setCategory] = useState("hollywood");
  const value = { category, setCategory };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
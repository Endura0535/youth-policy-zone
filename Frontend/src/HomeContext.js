import axios from "axios";
import { createContext, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeContext = createContext("home");

export function HomeProvider({ children }) {

  const [ tabIdx, setTabIdx ] = useState(0);
  
  return (
    <HomeContext.Provider
      value={{
        tabIdx,
        setTabIdx,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export const useHome = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHome must be used within a HomeProvider");
  }
  return context;
};
import { createContext, useContext, useState } from "react";

const HomeContext = createContext("home");

export function HomeProvider({ children }) {

  const [ navIdx, setNavIdx ] = useState(0);
  
  return (
    <HomeContext.Provider
      value={{
        navIdx,
        setNavIdx,
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
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isEng, setIsEng] = useState(false);

  const handleLan = () => setIsEng(!isEng);

  return <AppContext.Provider value={{ isEng, handleLan }}>{children}</AppContext.Provider>;
};
